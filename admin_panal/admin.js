/* ==================================================================-
                            Login workings
===================================================================== */
var navlinks = document.getElementById('navlinks');
var right_content = document.getElementById('right_content');

var product_container = document.getElementById('product_container');
var Services_container = document.getElementById('Services_container');
var registered_container = document.getElementById('registered_container');
var blog_container = document.getElementById('blog_container');

function active_not_avtive(field, what) {

    let active_one = navlinks.querySelector('.admin_link_active');
    active_one.classList.remove('admin_link_active');

    let active_data = right_content.querySelector('.container_active');
    active_data.classList.remove('container_active');

    if (what == 'products') {
        product_container.classList.add('container_active');
    }
    else if (what == 'services') {
        Services_container.classList.add('container_active');
    }
    else if (what == 'user') {
        registered_container.classList.add('container_active');
    }
    else if (what == 'blog') {
        blog_container.classList.add('container_active');
    } else { }

    field.classList.add('admin_link_active');
}
/* ==================================================================-
                            Login workings
===================================================================== */


get_corresponding_data()
function get_corresponding_data() {
    getproduct_data()
    getservices_data()
    getuser_data()
}


/* ==================================================================-
                            Products Data
===================================================================== */
function getproduct_data() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/fetch");
        const jsonData = await response.json();
        show_products_data(jsonData);
    }

    logJSONData()
}

function show_products_data(data) {

    let total_index = data.length;
    let index = 0;

    let product_data = ''
    start_display()
    function start_display() {

        let list = '';

        let list_arr = data[index].product_desc_list;

        list_arr.forEach(element => {
            list += ` <li> &#x2022; ${element}</li>`
        });

        product_data += `
        
            <div class="product_box">

                <div class="product_detail_container">

                    <div class="product_image_container">
                        <img src="${data[index].product_Image}" />
                    </div>

                    <div class="product_detail">

                        <div class="product_name">

                            <div id="product_name">${data[index].product_name}</div>

                            <div class="product_options">
                                <button onclick="Delete_product('${data[index]._id}')">Delete</button>
                            </div> 

                        </div>

                        <div class="product_price">
                            Price: <span id="product_price">${data[index].product_Price}</span>
                        </div>

                        <div class="product_byline" id="product_byline">
                            ${data[index].product_byLine}
                        </div>

                    </div>

                </div>

                <div class="product_list_content">

                    <ul id="product_list_content">
                    ${list}
                    </ul>

                </div>

            </div>
        `

        if (total_index == index + 1) {
            product_container.innerHTML = product_data;
        }
        else {
            index++;
            start_display()
        }
    }

}

function Delete_product(id){
    async function logJSONData() {
        const response = await fetch(`https://website-backend-gamma.vercel.app/security/${id}`,{method:'DELETE'});
        const jsonData = await response.json();
        console.log(jsonData);
        getproduct_data();
    }
    logJSONData()

}
/* ==================================================================-
                            Products Data
===================================================================== */





/* ==================================================================-
                            Services Data
===================================================================== */
function getservices_data() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/fetchproduct");
        const jsonData = await response.json();
        show_Services_data(jsonData);
    }

    logJSONData()
}
var Services_container = document.getElementById('Services_container');
function show_Services_data(data) {

    let total_index = data.length;
    let index = 0;

    let product_data = ''
    start_display()
    function start_display() {

        product_data += `
        
            <div class="product_box">

                <div class="product_detail_container">

                    <div class="product_image_container">
                        <img src="${data[index].product_Image}" />
                    </div>

                    <div class="product_detail">

                        <div class="product_name">

                            <div id="product_name">${data[index].product_name}</div>

                            <div class="product_options">
                                <button onclick="Delete_Services('${data[index]._id}')">Delete</button>
                            </div> 

                        </div>

                        <div class="product_price">
                            Price: <span id="product_price">${data[index].product_Price}</span>
                        </div>

                        <div class="product_byline" id="product_byline">
                            ${data[index].product_byLine}
                        </div>

                    </div>

                </div>

            </div>
        `

        if (total_index == index + 1) {
            Services_container.innerHTML = product_data;
        }
        else {
            index++;
            start_display()
        }
    }

}

function Delete_Services(id){
    async function logJSONData() {
        const response = await fetch(`https://website-backend-gamma.vercel.app/investigation/${id}`,{method:'DELETE'});
        const jsonData = await response.json();
        console.log(jsonData);
        getservices_data();
    }
    logJSONData()

}
/* ==================================================================-
                            Services Data
===================================================================== */





/* ==================================================================-
                            User data
===================================================================== */
function getuser_data() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/fetchuser");
        const jsonData = await response.json();
        show_user(jsonData);
    }

    logJSONData()
}
function show_user(data) {

    let total_index = 0;
    let index = data.length - 1;

    let product_data = ''
    start_display()
    function start_display() {

        product_data +=
            `
                <div class="user_box">

                    <div class="tittle">
                        <p>First name<span>:</span></p>
                        <p>Last name<span>:</span></p>
                        <p>Email<span>:</span></p>
                        <p>Contact No.<span>:</span></p>
                        <p>Industry<span>:</span></p>
                        <p>Model Name <span>:</span></p>
                        <p>Model Serial No.<span>:</span></p>
                        <p>City<span>:</span></p>
                        <p>Country<span>:</span></p>
                    </div>
                    <div class="value">
                        <p>${data[index].firstName}</p>
                        <p>${data[index].lastName}</p>
                        <p>${data[index].email}</p>
                        <p>${data[index].contactNo}</p>
                        <p>${data[index].industry}</p>
                        <p>${data[index].modelName}</p>
                        <p>${data[index].modelSerialNo}</p>
                        <p>${data[index].city}</p>
                        <p>${data[index].country}</p>
                    </div>

                    <div class='user_delte_button' onclick="Delete_User('${data[index]._id}')">Delete</div>

                </div>

            `

        if (total_index == index) {
            registered_container.innerHTML = product_data;
        }
        else {
            index--;
            start_display()
        }
    }

}

function Delete_User(id){
    async function logJSONData() {
        const response = await fetch(`https://website-backend-gamma.vercel.app/user/${id}`,{method:'DELETE'});
        const jsonData = await response.json();
        console.log(jsonData);
        getuser_data();
    }
    logJSONData()

}
/* ==================================================================-
                            User data
===================================================================== */





/* ==================================================================-
                            Blogs Page
===================================================================== */
function getBlogs_data() {

}
/* ==================================================================-
                            Blogs Page
===================================================================== */