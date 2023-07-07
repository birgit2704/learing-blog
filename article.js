import { renderBlogsOneToThree } from "./sharedFunctions.module.js";
import { blogs } from "./blogs.js";

let selectedBlog = localStorage.getItem("blogId");

document.addEventListener("click", function (e) {
  if (e.target.dataset.btn) {
    selectedBlog = e.target.dataset.btn;
    localStorage.setItem("blogId", selectedBlog);
    renderSelectedBlog();
  }
});

renderSelectedBlog();
renderBlogsOneToThree();

function renderSelectedBlog() {
  let blogToRender = blogs[selectedBlog];
  console.log(blogToRender.img);

  document.getElementById("selected-blog").innerHTML = `
     <div class="article-heading-subheading">
       <p class="date selected-date">${blogToRender.date}</p>
       <h1>${blogToRender.header}</h1>
       <p>${blogToRender.shortText}</p>
     </div>
     <img
               class="selected-article-img"
               src="${blogToRender.img}"
               alt="${blogToRender.alt}"
     />

     <div class="selected-blog-longtext">${blogToRender.longText}
     </div>
   `;
}
