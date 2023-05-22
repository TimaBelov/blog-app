let post = {
  title: "",
  text: "",
};

const titleInputNode = document.querySelector(".js-title-input");
const postTextInputNode = document.querySelector(".js-post-text-input");
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const postsNode = document.querySelector(".js-posts");

newPostBtnNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  setPost(postFromUser);

  renderPost();
});

function getPostFromUser() {
  const title = titleInputNode.value;
  const text = postTextInputNode.value;

  return {
    title,
    text,
  };
}

function setPost(newPost) {
  post = newPost;
}

function getPost() {
  return post;
}

function renderPost() {
  const post = getPost();
  const postHTML = `
  <div class='post'>
    <p class='post__title'>${post.title}</p>
    <p class='post__text'>${post.text}</p>
  </div>
  `;
  postsNode.innerHTML = postHTML;
}
