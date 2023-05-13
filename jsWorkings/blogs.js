function Fetch_blogs_data() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/blogs");
        const jsonData = await response.json();
        Show_Blogs(jsonData);
    }

    logJSONData()
}
var tops_blogs_list = document.getElementById('tops_blogs_list');
var blogs_list_container = document.getElementById('blogs_list_container');
function Show_Blogs(data) {
    //==============================Top posts list===========================================
    let blog_list = ``;
    data.forEach(element => {
        blog_list +=
            `
        <p onclick="open_blog_page('${element._id}')">

            <span>&#x2022;</span>

            <span>${element.Heading}</span>

        </p>
        `;

    });
    tops_blogs_list.innerHTML = blog_list;
    //==============================Top posts list===========================================

    // Grid posts list
    let blog_grid = ''
    data.forEach(element => {
        blog_grid +=
            `
            <div class="blog_box" onclick="open_blog_page('${element._id}')">
            <div class="blog_box_iamge">
                <img src="${element.Image}" alt="blog_iamge" />
            </div>
            <div class="blog_box_details">

                <div class="blog_box_heading">${element.Heading}</div>
                <div class="blog_box_byline">${element.Byline}</div>
                <div class="blog_box_button">
                    <button>Read More</button>
                </div>

            </div>
        </div>
            `;
    });
    blogs_list_container.innerHTML = blog_grid;
    // Grid posts list

}



function filter_blogs_data(what) {

    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/blogs");
        const jsonData = await response.json();

        change_blog_grid(jsonData, what)
    }
    logJSONData()

}
function change_blog_grid(data, field) {
    let filtered_data = [];
    data.forEach(item => {
        if (item.category === field) {
            filtered_data.push(item)
        }
    });

    let blog_grid = ''
    filtered_data.forEach(element => {
        blog_grid +=
            `
            <div class="blog_box" onclick="open_blog_page('${element._id}')">
            <div class="blog_box_iamge">
                <img src="${element.Image}" alt="blog_iamge" />
            </div>
            <div class="blog_box_details">

                <div class="blog_box_heading">${element.Heading}</div>
                <div class="blog_box_byline">${element.Byline}</div>
                <div class="blog_box_button">
                    <button>Read More</button>
                </div>

            </div>
        </div>
            `;
    });
    blogs_list_container.innerHTML = blog_grid;
}






function open_blog_page(what) {

    // local Storage id store
    localStorage.setItem("blogID", `${what}`);
    // local Storage id store

    // send to single blog page
    let base_url = window.location.href.substring(0, window.location.href.length - 10);
    window.location.href = `${base_url}blog.html`;
    // send to single blog page

}
var tops_blogs_single_list = document.getElementById('tops_blogs_single_list')
function Fetch_blog_data() {

    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/blogs");
        const jsonData = await response.json();
        add_top_list(jsonData);
    }

    logJSONData()

    function add_top_list(data) {
        let blog_list = ``;
        data.forEach(element => {
            blog_list +=
                `
                    <p onclick="open_Another_blog_page('${element._id}')">

                        <span>&#x2022;</span>

                        <span>${element.Heading}</span>

                    </p>
                    `;

        });
        tops_blogs_single_list.innerHTML = blog_list;

        async function logJSONData() {
            const response = await fetch(`https://website-backend-gamma.vercel.app/blogs/${localStorage.getItem("blogID")}`);
            const jsonData = await response.json();
            show_single_blog(jsonData);
        }

        logJSONData()
    }

}
function open_Another_blog_page(what) {

    // local Storage id store
    localStorage.setItem("blogID", `${what}`);
    // local Storage id store

    window.location.reload();

}

var blog_image = document.getElementById('blog_image');
var blog_heading = document.getElementById('Single_blog_heading');

var blog_detail_container = document.getElementById('blog_detail_container');

function show_single_blog(data) {
    blog_image.innerHTML = `<img src='${data.Image}' />`;
    blog_heading.innerHTML = `${data.Heading}'`;
    console.log(data.Paragraph)
    blog_detail_container.innerHTML = `${data.Paragraph}'`;
}