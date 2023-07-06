import { blogs } from "./blogs.js";
import {
  renderBlogsOneToThree,
  renderBlogsOneToSix,
} from "./sharedFunctions.module.js";

if (document.getElementById("big-container")) {
  renderBlogsOneToSix();
} else renderBlogsOneToThree();

document.addEventListener("click", function (e) {
  if (e.target.id === "view-more") renderAllBlogs();
  document.getElementById("view-more").style.display = "none";
});

function renderAllBlogs() {
  let blogHtml = "";
  blogs.forEach((blog) => {
    if (blog.id > 0) {
      blogHtml += `
          <section class="blog-section">
                <img
                  class="blog-img"
                  src="${blog.img}"
                  alt="${blog.alt}"
                />
                <p class="date">${blog.date}</p>
                <h2>${blog.header}</h2>
                <p>
                  ${blog.shortText}
                </p>
              </section>
          `;
    }
  });

  document.getElementById("blog-container").innerHTML = blogHtml;
}

renderHero();
function renderHero() {
  document.getElementById("hero-section").innerHTML = `
  <div class="hero-section-content">
    <p class="date-hero">${blogs[0].date}</p>
        <h1>${blogs[0].header}</h1>
        <p>
          ${blogs[0].shortText}
        </p>
  </div>
    `;
}
