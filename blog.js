const blogs = localStorage.getItem("blogs");
const getBlogs = JSON.parse(blogs);
console.log(getBlogs);
function goBack() {
    window.URL = "index.html"
}

const blogId = localStorage.getItem("PWBlogId");
const getBlogId = JSON.parse(blogId);
console.log(getBlogId);

for (let i = 0; i < getBlogs.length; i++) {
    console.log(getBlogs[i].poster)
    for (let j = 0; j < getBlogId.length; i++) {
        console.log(getBlogId[j])
        if (getBlogs[i].blogId == getBlogId[j]) {
            const title = document.getElementById("title");
            title.innerText = getBlogs[i].title;
            const blogImage = document.getElementById("blogImage");
            blogImage.src = getBlogs[i].poster;
            const blogDescription = document.getElementById("description");
            blogDescription.innerText = getBlogs[i].content;
        }
    }
}