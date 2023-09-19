function post() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const postContainer = document.getElementById("posts-container");

  for (const post of posts) {
    const postdiv = document.createElement("div");
    postdiv.classList.add("post");
    postdiv.innerHTML = `
    <h4>User-${post.id}</4>
    <h5>Post: title-${post.title}</5>
    <p>Post description ${post.body}</p>
    `;
    postContainer.appendChild(postdiv);
  }
}
post();
