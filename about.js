import { renderBlogsOneToThree } from "./sharedFunctions.module.js";

let selectedBlog = "";

renderBlogsOneToThree();

document.addEventListener("click", function (e) {
  if (e.target.dataset.btn) {
    selectedBlog = e.target.dataset.btn;
    localStorage.setItem("blogId", selectedBlog);
    window.location = "./article.html";
  }
});
