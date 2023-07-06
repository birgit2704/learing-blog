import { blogs } from "./blogs.js";

export function renderBlogsOneToThree() {
  let blogHtml = "";
  blogs.forEach((blog) => {
    if (blog.id > 0 && blog.id < 4) {
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

export function renderBlogsOneToSix() {
  let blogHtml = "";
  blogs.forEach((blog) => {
    if (blog.id > 0 && blog.id < 7) {
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
