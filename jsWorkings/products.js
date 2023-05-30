var product_varients_container = document.getElementById('product_varients_container');

function onload_get_data() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/fetch");
        const jsonData = await response.json();
        display_Product_data(jsonData);
    }

    logJSONData()
}

function display_Product_data(data) {

    let total_index = data.length;
    let index = 0;

    let product_list = '';

    start_display()
    function start_display() {

        let list = '';

        let list_arr = data[index].product_desc_list;

        list_arr.forEach(element => {
            list += ` <li>${element}</li>`
        });

        let product_id = data[index].product_name.replaceAll(" ", "_");

        product_list += `

            <div class="varient_box" id="${product_id}">

                <div class="varient_box_detail">

                    <div class="variant_box_heading">${data[index].product_name}</div>

                    <div class="variant_box_para">${data[index].product_byLine}</div>

                    <div class="varient_box_list">

                        <ul>
                            ${list}
                        </ul>

                        ${data[index].product_Price == '' ? `` :
                `<div class="variant_box_para">
                                        Quantity Based Pricing Range:
                                        <span>
                                            ${data[index].product_Price}         
                                        </span>
                                    </div>`
            }

                    </div>

                    <div class="variant_box_box"><button onclick="view_more_content(this)">View more</button></div>

                </div>

                <div class="varient_box_image">
                    <img src="${data[index].product_Image}" alt="variant image" />
                </div>

            </div>
            <div class="varient_separation_line"></div>

        `

        if (total_index == index + 1) {
            product_varients_container.innerHTML = product_list;
        }
        else {
            index++;
            start_display()
        }

    }


}


var Services_varients_container = document.getElementById('Services_varients_container');

function onload_get_Services() {
    async function logJSONData() {
        const response = await fetch("https://website-backend-gamma.vercel.app/fetchproduct");
        const jsonData = await response.json();
        display_Product_services(jsonData);
    }

    logJSONData()
}

function display_Product_services(data) {

    let total_index = data.length;
    let index = 0;

    let product_list = '';

    start_display()
    function start_display() {

        product_list +=
            `
            <div class="varient_box" id="investigation1">

                <div class="varient_box_detail">

                    <div class="variant_box_heading">${data[index].product_name}</div>

                    <div class="variant_box_para">${data[index].product_byLine}</div>

                </div>
                <div class="Investigation_varient_box_image">
                    <img src="${data[index].product_Image}" alt="variant image" />
                </div>

            </div>
            <div class="varient_separation_line"></div>
        `

        if (total_index == index + 1) {
            Services_varients_container.innerHTML = product_list;
        }
        else {
            index++;
            start_display()
        }

    }


}