import { renderBlogs } from "./sharedFunctions.module.js";

let selectedBlog = "";

renderBlogs(3);

document.addEventListener("click", function (e) {
  if (e.target.dataset.btn) {
    selectedBlog = e.target.dataset.btn;
    localStorage.setItem("blogId", selectedBlog);
    window.location = "./article.html";
  }
});
