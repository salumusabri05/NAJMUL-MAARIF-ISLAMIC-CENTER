// Function to create a new post element
function createPostElement(title, content) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-item');

    const postTitle = document.createElement('h3');
    postTitle.textContent = title;

    const postContent = document.createElement('p');
    postContent.textContent = content;

    postDiv.appendChild(postTitle);
    postDiv.appendChild(postContent);

    return postDiv;
}

// Function to add a new post
function addPost(title, content, targetElementId) {
    const postElement = createPostElement(title, content);
    document.getElementById(targetElementId).appendChild(postElement);
}

// Example posts data
const recentPostsData = [
    { title: "Recent Post 1", content: "Content for recent post 1." },
    { title: "Recent Post 2", content: "Content for recent post 2." },
    { title: "Recent Post 3", content: "Content for recent post 3." }
];

const featuredPostsData = [
    { title: "Featured Post 1", content: "Content for featured post 1." },
    { title: "Featured Post 2", content: "Content for featured post 2." },
    { title: "Featured Post 3", content: "Content for featured post 3." }
];

// Add example posts to the page
window.onload = function() {
    recentPostsData.forEach(post => addPost(post.title, post.content, 'recentPosts'));
    featuredPostsData.forEach(post => addPost(post.title, post.content, 'featuredPosts'));
};

// Handle form submission
document.getElementById('postForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let title = document.getElementById('title').value.trim();
    let content = document.getElementById('content').value.trim();

    if (title === "" || content === "") {
        alert("Please fill in all fields.");
        return;
    }

    addPost(title, content, 'recentPosts');
    alert("Post submitted successfully!");
    this.reset();
});
