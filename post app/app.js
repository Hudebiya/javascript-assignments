var posts = [];

if (localStorage.getItem('postsData')) {
  posts = eval(localStorage.getItem('postsData')); 
}

var form = document.getElementById('postForm');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var title = document.getElementById('title').value;
    var content = document.getElementById('content').value;
    var theme = document.getElementById('themeSelect').value;

    if (name === '' || email === '' || title === '' || content === '') {
      alert('Please fill all fields!');
      return;
    }

    var post = {
      id: posts.length + 1,
      name: name,
      email: email,
      title: title,
      content: content,
      theme: theme,
      createdAt: new Date().toLocaleString()
    };

    posts.push(post);

    localStorage.setItem('postsData', posts.toSource ? posts.toSource() : JSON.stringify(posts));

    window.location.href = 'post.html';
  });
}

var postsContainer = document.getElementById('postsContainer');

if (postsContainer) {
  renderPosts();
}

function renderPosts() {
  postsContainer.innerHTML = '';

  if (posts.length === 0) {
    postsContainer.innerHTML = '<p class="text-center text-muted">No posts yet. Go back and create one!</p>';
    return;
  }

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    var col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    var card = document.createElement('div');
    card.className = 'card shadow-sm h-100';
    card.style.backgroundColor = post.theme;

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var name = document.createElement('h5');
    name.className = 'text-primary';
    name.textContent = post.name;

    var email = document.createElement('p');
    email.className = 'text-muted mb-1';
    email.textContent = post.email;

    var title = document.createElement('h6');
    title.className = 'fw-bold';
    title.textContent = post.title;

    var content = document.createElement('p');
    content.textContent = post.content;

    var small = document.createElement('small');
    small.className = 'text-muted d-block mb-2';
    small.textContent = '🕒 ' + post.createdAt;

    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-sm btn-warning me-2';
    editBtn.textContent = 'Edit';
    editBtn.onclick = (function (index) {
      return function () {
        var newTitle = prompt('Edit title:', posts[index].title);
        var newContent = prompt('Edit content:', posts[index].content);
        if (newTitle && newContent) {
          posts[index].title = newTitle;
          posts[index].content = newContent;
          localStorage.setItem('postsData', JSON.stringify(posts));
          renderPosts();
        }
      };
    })(i);

    var deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-sm btn-danger';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = (function (index) {
      return function () {
        if (confirm('Are you sure to delete this post?')) {
          posts.splice(index, 1);
          localStorage.setItem('postsData', JSON.stringify(posts));
          renderPosts();
        }
      };
    })(i);

    cardBody.appendChild(name);
    cardBody.appendChild(email);
    cardBody.appendChild(title);
    cardBody.appendChild(content);
    cardBody.appendChild(small);
    cardBody.appendChild(editBtn);
    cardBody.appendChild(deleteBtn);
    card.appendChild(cardBody);
    col.appendChild(card);
    postsContainer.appendChild(col);
  }
}
