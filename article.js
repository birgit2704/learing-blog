import { renderBlogsOneToThree } from "./sharedFunctions.module.js";
import { blogs } from "./blogs.js";

renderSelectedBlog();
renderBlogsOneToThree();

function renderSelectedBlog() {
  const selectedBlog = blogs[0];

  document.getElementById("selected-blog").innerHTML = `
    <div class="article-heading-subheading">
      <p class="date selected-date">${selectedBlog.date}</p>
      <h1>${selectedBlog.header}</h1>
      <p>${selectedBlog.shortText}</p>
    </div>
    <img
              class="selected-article-img"
              src="${selectedBlog.img}"
              alt="${selectedBlog.alt}"
    />
    
    <div class="selected-blog-longtext">${selectedBlog.longText}
    </div>
  `;
}
