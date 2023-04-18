// navigation_workings
var products_bar_container = document.getElementById('products_bar_container')
function open_product_Service_bar() {
    products_bar_container.style.display = 'block';
}
window.addEventListener('click', function (event) {
    if (event.target.id == 'products_bar_container') {
        products_bar_container.style.display = 'none';
    }
})

var side_bar_content_wrapper = document.getElementById('side_bar_content_wrapper');
var product_Service_inner = document.getElementById('product_Service_inner');

function open_close_side_bar(what) {
    if (what == 'open') {
        side_bar_content_wrapper.classList.add('side_bar_content_wrapper_open');
    }
    else {
        side_bar_content_wrapper.classList.remove('side_bar_content_wrapper_open');

        if (product_Service_inner.classList.contains('product_Service_inner_open')) {
            product_Service_inner.classList.remove('product_Service_inner_open')
        }
    }
}

function open_product_inner_section() {
    if (product_Service_inner.classList.contains('product_Service_inner_open')) {
        product_Service_inner.classList.remove('product_Service_inner_open')
    }
    else {
        product_Service_inner.classList.add('product_Service_inner_open')
    }
}

var side_bar_content_container = document.getElementById('side_bar_content_container');

window.addEventListener('click', function (event) {
    if (event.target.id == 'side_bar_content_container') {
        side_bar_content_wrapper.classList.remove('side_bar_content_wrapper_open');
        if (product_Service_inner.classList.contains('product_Service_inner_open')) {
            product_Service_inner.classList.remove('product_Service_inner_open')
        }
    }
})

// navigation_workings