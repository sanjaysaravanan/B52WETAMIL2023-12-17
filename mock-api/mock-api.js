const apiUrl = "https://657ec91c3e3f5b1894642141.mockapi.io";

// All the API related operations ( READ, CREATE, UPDATE, DELETE)
const getAllPosts = async () => {
  const response = await fetch(`${apiUrl}/posts`);

  const posts = await response.json();

  postsGrid.innerHTML = "";
  posts.forEach((post) => {
    postsGrid.appendChild(
      createPostCard(post.id, post.title, post.imageUrl, post.caption)
    );
  });
};

// Create Post
// Creating new post - We need to do CREATE ( POST - HTTP Method )
const createPost = async (postData) => {
  try {
    await fetch(`${apiUrl}/posts`, {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });
    getAllPosts();
  } catch (err) {
    console.log(err);
    alert("Something wrong while creating a new post");
  }
};

const deletePost = async (postId) => {
  try {
    await fetch(`${apiUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    getAllPosts();
  } catch (error) {
    console.log(error);
    alert("Something went wrong while deleting post");
  }
};

const postsGrid = document.querySelector(".posts-grid");

function createPostCard(id, title, imageUrl, caption) {
  const divElement = document.createElement("div");
  divElement.classList.add("post-card");

  divElement.innerHTML = `
    <h3>${title}</h3>
    <img src="${imageUrl}" alt="${title}"  />
    <p>${caption}</p>
    <button onclick="deletePost(${id})" >Delete</button>
  `;
  return divElement;
}

getAllPosts();

const inpTitle = document.getElementById("title");
const inpImage = document.getElementById("imageUrl");
const inpCaption = document.getElementById("caption");

const formElement = document.querySelector("form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    title: inpTitle.value,
    imageUrl: inpImage.value,
    caption: inpCaption.value,
  };

  console.log(data);

  // API Call to Create a new POST
  createPost(data);
  formElement.reset();
});
