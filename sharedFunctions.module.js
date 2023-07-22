import { blogs } from "./blogs.js";

export function renderBlogs(num) {
  let blogHtml = "";
  let blogsToRender = [];
  blogs.forEach((blog) => {
    if (blog.finished && num === 3) {
      blogsToRender.unshift(blog);
      console.log(blogsToRender);
    } else if (blog.id !== 0) {
      blogsToRender.push(blog);
      console.log(blogsToRender);
    }
  });
  blogHtml = blogsToRender
    .slice(0, num)
    .map(
      (blog) => `
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
                 <button  class="read-more" data-btn="${blog.id}">Read more....</button>
               </section>
           `
    )
    .join("");
  document.getElementById("blog-container").innerHTML = blogHtml;
}
