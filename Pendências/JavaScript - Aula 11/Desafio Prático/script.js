document.addEventListener('DOMContentLoaded', function () {
    const posts = [];
    const postList = document.getElementById('posts');
    const postForm = document.getElementById('post-form');

    function renderPosts() {
        postList.innerHTML = '';
        posts.forEach((post, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <h3>${post.title}</h3>
                <p>${post.content.substring(0, 100)}...</p>
                <span class="post-date">${post.date}</span>
                <button class="delete-post">X</button>
            `;

            li.querySelector('.delete-post').addEventListener('click', (e) => {
                e.stopPropagation();
                removePost(index);
            });

            li.addEventListener('click', () => {
                showPostDetails(post);
            });

            postList.appendChild(li);
        });
    }

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const title = this.title.value;
        const content = this.content.value;
        const date = new Date().toLocaleDateString();

        if (title && content) {
            posts.push({ title, content, date });
            renderPosts();
            this.reset();
        }
    });

    function removePost(index) {
        posts.splice(index, 1);
        renderPosts();
    }

    function showPostDetails(post) {
        const detailTitle = document.getElementById('detail-title');
        const detailDate = document.getElementById('detail-date');
        const detailContent = document.getElementById('detail-content');
        detailTitle.innerText = post.title;
        detailDate.innerText = post.date;
        detailContent.innerText = post.content;

        document.getElementById('post-list').style.display = 'none';
        document.getElementById('post-details').style.display = 'block';
    }

    document.getElementById('back-button').addEventListener('click', () => {
        document.getElementById('post-details').style.display = 'none';
        document.getElementById('post-list').style.display = 'block';
    });

    renderPosts();
});

