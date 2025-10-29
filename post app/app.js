var LS_KEY = 'wk_posts_v1';
var posts = [];

var postForm = document.getElementById('postForm');
var titleInput = document.getElementById('postTitle');
var bodyInput = document.getElementById('postBody');
var tagsInput = document.getElementById('postTags');
var imgInput = document.getElementById('postImage');
var imgPreview = document.getElementById('imgPreview');
var imgPreviewWrap = document.getElementById('imgPreviewWrap');
var titleCount = document.getElementById('titleCount');
var bodyCount = document.getElementById('bodyCount');
var postsContainer = document.getElementById('postsContainer');
var searchInput = document.getElementById('searchInput');
var sortSelect = document.getElementById('sortSelect');
var clearAllBtn = document.getElementById('clearAll');
var editId = document.getElementById('editId');

function saveToStorage() {
  localStorage.setItem(LS_KEY, JSON.stringify(posts));
}

function loadFromStorage() {
  var data = localStorage.getItem(LS_KEY);
  if (data) posts = JSON.parse(data);
}

imgInput.addEventListener('change', function () {
  var file = imgInput.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    imgPreview.src = e.target.result;
    imgPreviewWrap.classList.remove('d-none');
  };
  reader.readAsDataURL(file);
});

// Form submit
postForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var id = editId.value ? parseInt(editId.value) : Date.now();
  var title = titleInput.value.trim();
  var body = bodyInput.value.trim();
  var tags = tagsInput.value.split(',').map(function (t) { return t.trim(); }).filter(Boolean);
  var image = imgPreview.src || '';

  var existing = posts.find(function (p) { return p.id === id; });

  if (existing) {
    existing.title = title;
    existing.body = body;
    existing.tags = tags;
    existing.image = image;
  } else {
    var post = {
      id: id,
      title: title,
      body: body,
      tags: tags,
      image: image,
      createdAt: Date.now()
    };
    posts.unshift(post);
  }

  saveToStorage();
  renderPosts();

  postForm.reset();
  imgPreviewWrap.classList.add('d-none');
  editId.value = '';
  document.querySelector('#postModal .modal-title').textContent = 'New Post';
  var modal = bootstrap.Modal.getInstance(document.getElementById('postModal'));
  modal.hide();
});

titleInput.addEventListener('input', function () {
  titleCount.textContent = titleInput.value.length + ' / 100';
});
bodyInput.addEventListener('input', function () {
  bodyCount.textContent = bodyInput.value.length + ' / 1000';
});

function renderPosts() {
  postsContainer.innerHTML = '';
  var search = searchInput.value.toLowerCase();
  var sort = sortSelect.value;

  var list = posts.filter(function (p) {
    return (
      p.title.toLowerCase().includes(search) ||
      p.body.toLowerCase().includes(search) ||
      (p.tags || []).join(',').toLowerCase().includes(search)
    );
  });

  if (sort === 'title') {
    list.sort(function (a, b) { return a.title.localeCompare(b.title); });
  } else if (sort === 'oldest') {
    list.sort(function (a, b) { return a.createdAt - b.createdAt; });
  } else {
    list.sort(function (a, b) { return b.createdAt - a.createdAt; });
  }

  list.forEach(function (p) {
    var col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4 mb-4';

    var card = document.createElement('div');
    card.className = 'card shadow-sm h-100';

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body d-flex justify-content-between';

    var left = document.createElement('div');
    left.className = 'flex-grow-1 me-3';

    var h5 = document.createElement('h5');
    h5.textContent = p.title;

    var meta = document.createElement('small');
    meta.className = 'text-muted d-block mb-2';
    meta.textContent = new Date(p.createdAt).toLocaleString();

    var bodyP = document.createElement('p');
    bodyP.textContent = p.body.length > 80 ? p.body.slice(0, 80) + '...' : p.body;

    var tagWrap = document.createElement('div');
    (p.tags || []).forEach(function (t) {
      var span = document.createElement('span');
      span.className = 'badge bg-secondary me-1';
      span.textContent = t;
      tagWrap.appendChild(span);
    });

    var actions = document.createElement('div');
    actions.className = 'mt-3 d-flex gap-2';

    var viewBtn = document.createElement('button');
    viewBtn.className = 'btn btn-sm btn-outline-primary';
    viewBtn.textContent = 'View';
    viewBtn.onclick = function () { openView(p); };

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-outline-secondary';
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () { openEdit(p.id); };

    var delBtn = document.createElement('button');
    delBtn.className = 'btn btn-sm btn-outline-danger';
    delBtn.textContent = 'Delete';
    delBtn.onclick = function () { deletePost(p.id); };

    actions.append(viewBtn, editBtn, delBtn);
    left.append(h5, meta, bodyP, tagWrap, actions);
    cardBody.append(left);

    if (p.image) {
      var imgCol = document.createElement('div');
      imgCol.style.width = '140px';
      var img = document.createElement('img');
      img.src = p.image;
      img.className = 'img-preview ms-auto';
      img.alt = 'post image';
      imgCol.appendChild(img);
      cardBody.append(imgCol);
    }

    card.appendChild(cardBody);
    col.appendChild(card);
    postsContainer.appendChild(col);
  });
}

function openEdit(id) {
  var p = posts.find(function (x) { return x.id === id; });
  if (!p) return;
  editId.value = p.id;
  titleInput.value = p.title;
  bodyInput.value = p.body;
  tagsInput.value = (p.tags || []).join(', ');
  if (p.image) {
    imgPreview.src = p.image;
    imgPreviewWrap.classList.remove('d-none');
  } else {
    imgPreview.src = '';
    imgPreviewWrap.classList.add('d-none');
  }
  titleCount.textContent = titleInput.value.length + ' / 100';
  bodyCount.textContent = bodyInput.value.length + ' / 1000';
  document.querySelector('#postModal .modal-title').textContent = 'Edit Post';
  var modal = new bootstrap.Modal(document.getElementById('postModal'));
  modal.show();
}

function deletePost(id) {
  if (!confirm('Delete this post?')) return;
  posts = posts.filter(function (p) { return p.id !== id; });
  saveToStorage();
  renderPosts();
}

function openView(post) {
  var date = new Date(post.createdAt).toLocaleString();
  var txt = post.title + '\n\n' + post.body + '\n\nTags: ' +
    (post.tags || []).join(', ') + '\nCreated: ' + date;
  alert(txt);
}

searchInput.addEventListener('input', function () { renderPosts(); });
sortSelect.addEventListener('change', function () { renderPosts(); });
clearAllBtn.addEventListener('click', function () {
  if (confirm('Clear ALL posts? This cannot be undone.')) {
    posts = [];
    saveToStorage();
    renderPosts();
  }
});

function init() {
  loadFromStorage();
  renderPosts();
}
init();
