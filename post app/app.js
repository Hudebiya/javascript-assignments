// Simple array to store posts
var posts = [];

// Theme colors
var themes = ['#f8f9fa', '#e3f2fd', '#fff3e0', '#e8f5e9', '#fce4ec'];
var themeSelect = document.getElementById('themeSelect');

// Add theme options
for (var i = 0; i < themes.length; i++) {
  var option = document.createElement('option');
  option.value = themes[i];
  option.textContent = themes[i];
  themeSelect.appendChild(option);
}

// Get form elements
var form = document.getElementById('postForm');
var titleInput = document.getElementById('title');
var contentInput = document.getElementById('content');
var postsContainer = document.getElementById('postsContainer');

// Handle form submit
form.addEventListener('submit', function (e) {
  e.preventDefault();

  var title = titleInput.value;
  var content = contentInput.value;
  var theme = themeSelect.value;

  if (title === '' || content === '') {
    alert('Please fill both fields!');
    return;
  }

  var post = {
    id: posts.length + 1,
    title: title,
    content: content,
    theme: theme,
    createdAt: new Date().toLocaleString()
  };

  posts.push(post);

  titleInput.value = '';
  contentInput.value = '';

  renderPosts();
});

// Function to show all posts
function renderPosts() {
  postsContainer.innerHTML = '';

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    var col = document.createElement('div');
    col.className = 'col-md-6 col-lg-4';

    var card = document.createElement('div');
    card.className = 'card shadow-sm h-100';
    card.style.backgroundColor = post.theme;

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.textContent = post.title;

    var p = document.createElement('p');
    p.className = 'card-text';
    p.textContent = post.content;

    var small = document.createElement('small');
    small.className = 'text-muted';
    small.textContent = 'Created at: ' + post.createdAt;

    cardBody.appendChild(h5);
    cardBody.appendChild(p);
    cardBody.appendChild(small);
    card.appendChild(cardBody);
    col.appendChild(card);
    postsContainer.appendChild(col);
  }
}
