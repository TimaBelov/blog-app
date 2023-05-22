const posts = [];

let post = {
  title: "",
  text: "",
  date: "",
};

const titleInputNode = document.querySelector(".js-title-input");
const postTextInputNode = document.querySelector(".js-post-text-input");
const newPostBtnNode = document.querySelector(".js-new-post-btn");
const postsNode = document.querySelector(".js-posts");

newPostBtnNode.addEventListener("click", function () {
  const postFromUser = getPostFromUser();

  addPost(postFromUser);

  renderPosts();
});

function getPostFromUser() {
  const title = titleInputNode.value;
  const text = postTextInputNode.value;
  const date = new Date();

  return {
    title,
    text,
    date,
  };
}

function addPost({ title, text, date }) {
  posts.push({
    title,
    text,
    date,
  });
}

function getPosts() {
  return posts;
}

function renderPosts() {
  const posts = getPosts();
  let postsHTML = "";
  posts.forEach((post) => {
    let date = `${post.date.toLocaleDateString()} ${post.date.toLocaleTimeString()}`;
    postsHTML += `
    <div class='post'>
      <p class='post__date'>${date}</p>
      <p class='post__title'>${post.title}</p>
      <p class='post__text'>${post.text}</p>
    </div>
    `;
  });

  postsNode.innerHTML = postsHTML;
}
