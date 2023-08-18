// Fetching data from LocalStorage and rendering blogs on the home page
document.addEventListener("DOMContentLoaded", () => {
    const blogList = document.getElementById("blogList");
    const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Rendering existing blogs
    blogs.forEach((blog) => {
        const blogItem = document.createElement("div");
        blogItem.className = "blog-item";
        blogItem.innerHTML = `
        <div class="blogposterbox"><img class="blogposter" src="${blog.poster}"></div>
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <button>Read me...</button>
      `;
        blogItem.addEventListener("click", () => viewBlog(blog));
        blogList.appendChild(blogItem);

    });
});

// Show the "Add Blog" modal when the "+" button is clicked
const addBlogBtn = document.getElementById("addBlogBtn");
const addBlogModal = document.getElementById("addBlogModal");
const closeModal = document.getElementsByClassName("close")[0];

addBlogBtn.onclick = () => {
    addBlogModal.style.display = "block";
};

closeModal.onclick = () => {
    addBlogModal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === addBlogModal) {
        addBlogModal.style.display = "none";
    }
};

// Function to view the full blog post on a separate page
const viewBlog = (blog) => {
    const blogContent = document.getElementById("blogContent");
    blogContent.innerHTML = `
      <h3>${blog.title}</h3>
      <p>Poster: ${blog.poster}</p>
      <p>${blog.content}</p>
    `;
    const blogId = [];
    blogId.push(blog.blogId);
    localStorage.setItem("PWBlogId", JSON.stringify(blogId));
    console.log(blogId)
    console.log("Yes")
    // Redirect to the blog page
    window.location.href = "blog.html";
};

// Function to handle adding a new blog

const blogContent = document.getElementById("blogContent");
blogContent.addEventListener("input", function () {
    let char = this.value
    let countChar = char.length;
    let chars = document.getElementById("chars");
    chars.innerText = countChar
    console.log(countChar);
    const charError = document.getElementById("charError");
    charError.style.display = "none";

    if (countChar < 1000) {
        const addBlogForm = document.getElementById("addBlogForm");
        addBlogForm.onsubmit = (event) => {
            event.preventDefault();

            const blogTitle = document.getElementById("blogTitle").value;
            const blogPoster = document.getElementById("blogPoster").value;
            const blogDescription = document.getElementById("blogDescription").value;
            const blogContent = document.getElementById("blogContent").value;
            const id = Date.now();



            // Create a new blog object
            const newBlog = {
                blogId: id,
                title: blogTitle,
                poster: blogPoster,
                description: blogDescription,
                content: blogContent,
            };

            // Saving new blog to LocalStorage
            const existingBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
            existingBlogs.push(newBlog);
            localStorage.setItem("blogs", JSON.stringify(existingBlogs));

            // Reload the page to show the new blog on the home page
            // window.location.reload();
        }
    }
    else {
        const charError = document.getElementById("charError");
        charError.style.display = "block";
        charError.style.color = "red";

    }

})

  // Function to go back to the home page from the
