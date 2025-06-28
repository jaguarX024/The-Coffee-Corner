let cat_arrow= document.querySelector(".cat-angle-down");
let cat_slide= document.querySelector(".cat-slide");
let html= document.querySelector("html");
let body= document.querySelector("body");
let exit= document.querySelector(".exit");
let schedule_slide= document.querySelector(".Ord-hours-slide");
let schedule_angle_down= document.querySelector(".schedule-slide-angle");
let cat_slide_event_active=true;
let H_categories= document.querySelector(".H-categories");
let ord_hours_event_active= true;
let order_items= document.querySelectorAll(".item");
let O_C_exit= document.querySelector(".O-C-exit");
let O_C_event_active= true;
let cat_list= document.querySelectorAll(".cat-list li");
let cat_slide_links= document.querySelectorAll(".cat_slide_links");
let initial_price= document.querySelector(".initial-price");
let add_order_plus= document.querySelector(".plus");
let add_order_minus= document.querySelector(".minus");
let item_quantity= document.querySelector(".add-quantity");
//variable to keep track of by how much the price will increase after clicking "+" or "-"
let plus_minus_tracker;




let cat_arrow_event = function () {

    if (document.body.clientWidth <= 900) {
        if (!cat_slide_event_active) {
            return;
        }
        cat_slide.classList.toggle("cat-slide-js");
        cat_arrow.classList.toggle("cat-arrow-js");
        html.classList.toggle("html-js");
        body.classList.toggle("body_no_scroll");

        
    } else {
        if (!cat_slide_event_active) {
            return;
        }

        cat_arrow.classList.toggle("cat-arrow-js");
        H_categories.classList.toggle("H-categories-js");

    }
};

cat_arrow.addEventListener("click",cat_arrow_event );

body.addEventListener("click", event=>{

    //categories arrow event reaction to body click
       if(!cat_arrow.contains(event.target)){
            cat_arrow.classList.remove("cat-arrow-js");
            H_categories.classList.remove("H-categories-js");

        }
        


    if (!cat_slide.contains(event.target) && !cat_arrow.contains(event.target) &&
         !schedule_angle_down.contains(event.target)&&
          !schedule_slide.contains(event.target) && !cart_bar_lg.contains(event.target) &&
            !cart_page.contains(event.target)){
            cat_slide.classList.remove("cat-slide-js");
            if (document.body.clientWidth < 900){
                cat_arrow.classList.remove("cat-arrow-js");
            }
                
            html.classList.remove("html-js");
            body.classList.remove("body_no_scroll");

            

            
    }

    //hide the cart page when clicking outside of it
    if (!cart_page.contains(event.target) && cart_page.classList.contains("cart-page-lg") && !cart_bar_lg.contains(event.target) && !event.target.closest(".in-cart-delete")) {
        body.classList.remove("html-js");
        cart_page.classList.remove("cart-page-lg");
        
        //code added to to make other events active after closing the cart page by clicking outside of it
        O_C_event_active = true;
        cat_slide_event_active = true;   
        ord_hours_event_active = true;
    }
    
    if (
    !schedule_slide.contains(event.target) &&
    !schedule_angle_down.contains(event.target) &&
    !cat_arrow.contains(event.target) &&
    !cat_slide.contains(event.target)
) {
    if (
        schedule_slide.classList.contains("schedule-slide-display") ||
        schedule_slide.classList.contains("ord_hours_slide2-js")
    ) {
        schedule_slide.classList.remove("schedule-slide-display");
        schedule_slide.classList.remove("ord_hours_slide2-js");
        schedule_angle_down.classList.remove("cat-arrow-js");
        html.classList.remove("html-js");
        cat_slide_event_active = true;   
        ord_hours_event_active = true;  
        basket_icon_event_active= true;
        O_C_event_active= true;
    }
}

});

exit.addEventListener("click", event=>{
    if(schedule_slide.contains(event.target)){
        schedule_slide.classList.remove("schedule-slide-display");
        schedule_angle_down.classList.remove("cat-arrow-js");
        html.classList.remove("html-js");
        cat_slide_event_active=true;
        ord_hours_event_active = true; 
        basket_icon_event_active=true;
        O_C_event_active= true;
        schedule_slide.classList.remove("ord_hours_slide2-js");
        body.classList.remove("body_no_scroll");
    }
});


schedule_angle_down.addEventListener("click", ()=>{
    if (!ord_hours_event_active){
        return ;
    }

    //stop all other events from happening
    cat_slide_event_active=false;
    O_C_event_active=false;
    basket_icon_event_active=false;

    H_categories.classList.remove("H-categories-js");
    body.classList.add("body_no_scroll");

    if(window.innerWidth <=900)
        {
            schedule_slide.classList.toggle("schedule-slide-display");
            schedule_angle_down.classList.toggle("cat-arrow-js");
            html.classList.toggle("html-js");
            
        }

        else
        {
            html.classList.toggle("html-js");
            schedule_angle_down.classList.toggle("cat-arrow-js");
            schedule_slide.classList.toggle("ord_hours_slide2-js");

            
        }
   
   

});

/*control cat slide links click event*/
cat_slide_links.forEach(element=>{
    element.addEventListener("click", ()=>{
            cat_slide.classList.toggle("cat-slide-js");
            cat_arrow.classList.toggle("cat-arrow-js");
            html.classList.toggle("html-js");
            body.classList.toggle("body_no_scroll");
    });
});

let item;
let initial_price_var;
order_items.forEach(element => {

    element.addEventListener("click", event=>{
        if(!O_C_event_active){
            return;
        }

        //closing cart page
        if( cart_page.classList.contains("cart-page-lg")){
            cart_page.classList.toggle("cart-page-lg");
        }

        //disabling other events when order items are clicked
        basket_icon_event_active= false;
        cat_slide_event_active=false;
        ord_hours_event_active= false;

        window.scrollTo({ top: 0 });

        // FIX: always get the .item div, even if a child is clicked
        const itemDiv = event.target.closest('.item');
        if (!itemDiv) return;
        item = Number(itemDiv.id);
        let block_to_be_displayed;
        let item_name = itemDiv.querySelector(".item-name");
        let block_name;
        body.classList.add("no-scroll");
        switch(item)
        {
           case 1:
           
           block_to_be_displayed= document.querySelector(".coffeeLike-Char");
           if (block_to_be_displayed){
              block_name= block_to_be_displayed.querySelector(".block-name-js");
              block_name.innerHTML= `${item_name.innerHTML}`;
              block_to_be_displayed.classList.add("block-display-js");
              initial_price_var= 2.85;
              plus_minus_tracker=2.85;
              initial_price.innerHTML=initial_price_var.toFixed(2);
              
           }
           break;
            
            case 2:
                 block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                 if (block_to_be_displayed){
                    block_name= block_to_be_displayed.querySelector(".block-name-js");
                    block_name.innerHTML= `${item_name.innerHTML}`;
                    block_to_be_displayed.classList.add("block-display-js");
                    initial_price_var= 3.15;
                    plus_minus_tracker=3.15;
                    initial_price.innerHTML=initial_price_var.toFixed(2);
                 }
                 break;
                 
                 case 3:
                    block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                    if (block_to_be_displayed){
                       block_name= block_to_be_displayed.querySelector(".block-name-js");
                       block_name.innerHTML= `${item_name.innerHTML}`;
                       block_to_be_displayed.classList.add("block-display-js");
                       initial_price_var= 4.50;
                       plus_minus_tracker=4.50;
                       initial_price.innerHTML=initial_price_var.toFixed(2);
                       
                    }
                    break;
                    case 4:
                        block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                        if (block_to_be_displayed){
                           block_name= block_to_be_displayed.querySelector(".block-name-js");
                           block_name.innerHTML= `${item_name.innerHTML}`;
                           block_to_be_displayed.classList.add("block-display-js");
                           initial_price_var= 4.99;
                           plus_minus_tracker=4.99;
                           initial_price.innerHTML=initial_price_var.toFixed(2);
                           
                        }
                        break;
                        case 5:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 4.30;
                               plus_minus_tracker=4.30;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;
                            case 6:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 4.25;
                               plus_minus_tracker=4.25;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;
                            case 7:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 3.50;
                               plus_minus_tracker=3.50;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;
                            case 8:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 3.70;
                               plus_minus_tracker=4.70;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;
                            case 9:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 4.20;
                               plus_minus_tracker=4.20;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;
                            case 10:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 2.00;
                               plus_minus_tracker=2.00;
                               initial_price.innerHTML= initial_price_var.toFixed(2);
                            }
                            break;
                            case 11:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 3.80;
                               plus_minus_tracker=3.80;
                               initial_price.innerHTML= initial_price_var.toFixed(2);
                            }
                            break;
                            case 12:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               initial_price_var= 2.50;
                               plus_minus_tracker=2.50;
                               initial_price.innerHTML=initial_price_var.toFixed(2);
                            }
                            break;

            
                

        }
        O_C_event_active=false;
       
        
    })
});


O_C_exit.addEventListener("click", event=>{
    let to_be_closed = event.target.closest(".Add-ons");
    to_be_closed.classList.remove("block-display-js");
    O_C_event_active = true;
    cat_slide_event_active = true;   
    ord_hours_event_active = true;  
    basket_icon_event_active= true; 
    body.classList.remove("no-scroll");

    //update the popup block items qunatity
    item_quantity.innerHTML = "1";
    //uncheck all checkboxes when closing the add-ons block
    let add_ons_container= event.target.closest(".Add-ons");
    let checkboxes= add_ons_container.querySelectorAll(".topping-checkbox");
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
});


add_order_plus.addEventListener("click",()=>{
    let quantity= Number(item_quantity.innerHTML);
    quantity +=1;
    item_quantity.innerHTML=`${quantity}`;
    //update the add to order button price
    let current_price= Number(initial_price.innerHTML);
    initial_price.innerHTML=(current_price + plus_minus_tracker).toFixed(2);
});
add_order_minus.addEventListener("click",()=>{
    
    let quantity= Number(item_quantity.innerHTML);
    if(quantity>1){
        quantity -=1;
        item_quantity.innerHTML=`${quantity}`;
        //update the add to order button price
        let current_price= Number(initial_price.innerHTML);
        initial_price.innerHTML=(current_price - plus_minus_tracker).toFixed(2);
    }
    
});


function cat_list_event_closure(){
    cat_slide.classList.remove("cat-slide-js");
    cat_arrow.classList.remove("cat-arrow-js");
    html.classList.remove("html-js");
   }


/* Adding to cart handling codes*/
let add_to_cart= document.querySelector(".order-button");
let cart_page_elements= document.querySelector(".cart-page-elements");
let cart_price_html= document.querySelector(".cart-bar-price");
let cart_quantity_html= document.querySelector(".cart-bar-items-count");
let topping_checkbox= document.querySelectorAll(".topping-checkbox");
let cart_page= document.querySelector(".cart-page");
let cart_bar_lg= document.querySelector(".basket_click");
let cart_bar=document.querySelector(".cart-bar");
basket_icon_event_active= true;
let cart_items_count_lg= document.querySelector(".cart-bar-items-count");
let cart_page_elements_container= document.querySelector(".cart-page-elements");
let item_name_container= document.querySelector(".block-name-js");
let sm_cart_bar_price= document.querySelector(".sm-cart-bar-price");
let sm_cart_bar_items_count= document.querySelector(".sm-cart-bar-items-count");


cart_bar.addEventListener("click",()=>{ 
       cart_bar_lg.click();  
});

cart_bar_lg.addEventListener("click", ()=>{
    if(!basket_icon_event_active){
        return;
    }
    //open the cart page for large screens
    cart_page.classList.toggle("cart-page-lg");

    //open the cart page for small screens
    cart_page.classList.add("cart-page-sm");
    //Diabling other events when cart page is displayed
    O_C_event_active = false;
    cat_slide_event_active = false;   
    ord_hours_event_active = false;  
    
    //stopping the page from scrolling when cart page is displayed
    document.body.classList.toggle("body_no_scroll");

    //turning the body dark when cart page is displayed
    body.classList.toggle("html-js");

    //reactivate other page events when the cart page is closed using the basket icon
    if (!cart_page.classList.contains("cart-page-lg")) {
        O_C_event_active = true;
        cat_slide_event_active = true;   
        ord_hours_event_active = true;   
    }
});


//event handler for checkboxes when choosing a drink
topping_checkbox.forEach(element=>{
    element.addEventListener("change", (event)=>{
         let current_price= Number(initial_price.innerHTML);
         const li= event.target.closest("li");
         const extraPriceSpan= li.querySelector(".extra-price");
         let extra_price= Number(extraPriceSpan.innerHTML);
         //determining by how much the extra price will increase based on item quantity
         let factor= Number(item_quantity.innerHTML);
        if(event.target.checked){
            initial_price.innerHTML=(current_price + factor*extra_price).toFixed(2);
            plus_minus_tracker += extra_price;
        }
        else{
            initial_price.innerHTML=(current_price - factor*extra_price).toFixed(2);
            plus_minus_tracker -= extra_price;
        }
    });
});

//Add to order button event
//Manage the event for big screen and small screens separately
add_to_cart.addEventListener("click", (event) => {
        // Update cart price
        let amount_to_add = Number(initial_price.innerHTML);
        let current_cart_value = Number(cart_price_html.innerHTML);
        let updated_cart_value = (current_cart_value + amount_to_add).toFixed(2);

        //big screen cart price
        cart_price_html.innerHTML = updated_cart_value;
        //small screen cart price
        sm_cart_bar_price.innerHTML = updated_cart_value;


        // Update cart items count
        let current_cart_quantity = Number(cart_items_count_lg.innerHTML);
        let quantity_to_add = Number(item_quantity.innerHTML);
        let updated_cart_quantity = current_cart_quantity + quantity_to_add;
        //big screen cart items count
        cart_items_count_lg.innerHTML = updated_cart_quantity;
        //small screen cart items count
        sm_cart_bar_items_count.innerHTML = updated_cart_quantity;

        // Create cart item block
        let item_in_cart_block = document.createElement("div");

        let first_block = document.createElement("div");
        let second_block = document.createElement("div");

        let item_in_cart_name = document.createElement("div");
        let item_in_cart_price = document.createElement("div");
        let in_cart_plus_minus = document.createElement("div");
        let in_cart_delete = document.createElement("div");
        // Name and quantity
        let name_part1 = document.createElement("span");
        let name_part2 = document.createElement("span");
        name_part1.innerHTML = item_name_container.innerHTML;
        name_part2.innerHTML = ` x ${item_quantity.innerHTML}`;
        item_in_cart_name.appendChild(name_part1);
        item_in_cart_name.appendChild(name_part2);

        item_in_cart_price.innerHTML = `$${initial_price.innerHTML}`;

        // Plus and minus icons
        let plus_icon = document.createElement("div");
        let minus_icon = document.createElement("div");
        plus_icon.innerHTML = `<i class="fa-solid fa-plus"></i>`;
        minus_icon.innerHTML = `<i class="fa-solid fa-minus"></i>`;
        in_cart_plus_minus.appendChild(plus_icon);
        in_cart_plus_minus.appendChild(minus_icon);

        // Delete icon
        in_cart_delete.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;

        // Assemble blocks
        first_block.appendChild(item_in_cart_name);
        first_block.appendChild(item_in_cart_price);
        second_block.appendChild(in_cart_plus_minus);

        item_in_cart_block.appendChild(first_block);
        item_in_cart_block.appendChild(second_block);
        // Add to cart page elements container
        cart_page_elements_container.appendChild(item_in_cart_block);

        //add classes to the blocks
        item_in_cart_block.classList.add("item-in-cart-block");
        first_block.classList.add("first-block");
        second_block.classList.add("second-block"); 
        item_in_cart_name.classList.add("item-in-cart-name");
        item_in_cart_price.classList.add("item-in-cart-price");
        in_cart_plus_minus.classList.add("in-cart-plus-minus");
        in_cart_delete.classList.add("in-cart-delete");

        //code for adding the selected toppings to the cart
        let selected_toppings = [];
        let checkboxes = event.target.closest(".Add-ons").querySelectorAll(".topping-checkbox");
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selected_toppings.push(checkbox.nextElementSibling.innerHTML);
            }
        });

        //crating a toppings block
        let toppings_block = document.createElement("div");
        toppings_block.classList.add("toppings-block");
        if (selected_toppings.length > 0) {
            toppings_block.innerHTML = `${selected_toppings.join(", ")}`;
        }
        // Append toppings block to the second block
        second_block.appendChild(toppings_block);
        second_block.appendChild(in_cart_delete);

        // Close the popup block after adding to cart
        if (O_C_exit) O_C_exit.click();
    
});


//creating an event for a click on the delete icon in the cart page
cart_page_elements_container.addEventListener("click", (event) => {
    if (event.target.closest(".in-cart-delete")) {
        let item_block = event.target.closest(".item-in-cart-block");
        if (item_block) {
            // Get the price and quantity from the item block
            let item_price = Number(item_block.querySelector(".item-in-cart-price").innerHTML.replace('$', ''));
            let item_quantity = Number(item_block.querySelector(".item-in-cart-name span:last-child").innerHTML.replace(' x ', ''));

            // Update cart price and quantity
            let current_cart_value = Number(cart_price_html.innerHTML);
            //big screen cart price
            cart_price_html.innerHTML = (current_cart_value - item_price).toFixed(2);
            //small screen cart price
            sm_cart_bar_price.innerHTML = (current_cart_value - item_price).toFixed(2);

            let current_cart_quantity = Number(cart_items_count_lg.innerHTML);
            //big screen cart items count
            cart_items_count_lg.innerHTML = current_cart_quantity - item_quantity;
            //small screen cart items count
            sm_cart_bar_items_count.innerHTML = current_cart_quantity - item_quantity;

            // Remove the item block from the cart page elements
            item_block.remove();

            //code to close the cart page if the cart is empty
            // Optionally, check if cart is empty before closing
            if (!cart_page_elements_container.querySelector(".item-in-cart-block") ) {
                //closing the  cart page for both small and large screens
                body.classList.remove("html-js");
                cart_page.classList.remove("cart-page-lg");
                cart_page.classList.remove("cart-page-sm");
                O_C_event_active = true;
                cat_slide_event_active = true;   
                ord_hours_event_active = true;
            }

        }
    }
});