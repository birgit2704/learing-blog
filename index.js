import { blogs } from "./blogs.js";
import { renderBlogs } from "./sharedFunctions.module.js";

let selectedBlog = "";

renderBlogs(6);

document.addEventListener("click", function (e) {
  if (e.target.id === "view-more") {
    renderBlogs(blogs.length);
    document.getElementById("view-more").style.display = "none";
  }
  if (e.target.dataset.btn) {
    selectedBlog = e.target.dataset.btn;
    localStorage.setItem("blogId", selectedBlog);
    window.location = "./article.html";
  }
});

renderHero();
function renderHero() {
  document.getElementById("hero-section").innerHTML = `
  <div class="hero-section-content">
    <p class="date-hero">${blogs[0].date}</p>
        <h1>${blogs[0].header}</h1>
        <p>
          ${blogs[0].shortText}
        </p>
        <button  class="read-more" data-btn="${blogs[0].id}" style="color: white">Read more....</button>
        </section>
  </div>
    `;
}
