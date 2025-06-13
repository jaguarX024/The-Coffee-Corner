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
let add_order_plus= document.querySelector(".plus");
let add_order_minus= document.querySelector(".minus");
let item_quantity= document.querySelector(".add-quantity");
let cat_list= document.querySelectorAll(".cat-list li");







let cat_arrow_event= function(){
    ord_hours_event_active= false;
    
    if (document.body.clientWidth <= 900)
        {
            if(!cat_slide_event_active){
                return;
            }
            cat_slide.classList.toggle("cat-slide-js");
            cat_arrow.classList.toggle("cat-arrow-js");
            html.classList.toggle("html-js");
        }
        else{
            if(!cat_slide_event_active){
                return;
            }
            H_categories.classList.toggle("H-categories-js");
        }
       

    
};
cat_arrow.addEventListener("click",cat_arrow_event );

body.addEventListener("click", event=>{

        if (!cat_slide.contains(event.target) && !cat_arrow.contains(event.target) && !schedule_angle_down.contains(event.target)&& !schedule_slide.contains(event.target)){
            cat_slide.classList.remove("cat-slide-js");
            cat_arrow.classList.remove("cat-arrow-js");
            html.classList.remove("html-js");
            ord_hours_event_active= true;
            
        }
    
    if(!schedule_slide.contains(event.target)&& !schedule_angle_down.contains(event.target) && !cat_arrow.contains(event.target)&&!cat_slide.contains(event.target)){
        schedule_slide.classList.remove("schedule-slide-display");
        schedule_angle_down.classList.remove("cat-arrow-js");
        html.classList.remove("html-js");
        cat_slide_event_active=true;
        schedule_slide.classList.remove("ord_hours_slide2-js");

        
    }
});

exit.addEventListener("click", event=>{
    if(schedule_slide.contains(event.target)){
        schedule_slide.classList.remove("schedule-slide-display");
        schedule_angle_down.classList.remove("cat-arrow-js");
        html.classList.remove("html-js");
        cat_slide_event_active=true;
        schedule_slide.classList.remove("ord_hours_slide2-js");
       
    }
   
})

schedule_angle_down.addEventListener("click", ()=>{
    if (!ord_hours_event_active){
        return ;
    }
    cat_slide_event_active=false;
    H_categories.classList.remove("H-categories-js");

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
   
   

})


let item;
order_items.forEach(element => {

    element.addEventListener("click", event=>{
        if(!O_C_event_active){
            return;
        }
        cat_slide_event_active=false;
        ord_hours_event_active= false;
        window.scrollTo({ top: 0 });
        item= Number(event.target.id);
        let block_to_be_displayed;
        let item_name = event.target.querySelector(".item-name");
        let block_name;
        body.classList.add("no-scroll");
        switch(item)
        {
           case 0:
           
           block_to_be_displayed= document.querySelector(".coffeeLike-Char");
           if (block_to_be_displayed){
              block_name= block_to_be_displayed.querySelector(".block-name-js");
              block_name.innerHTML= `${item_name.innerHTML}`;
              block_to_be_displayed.classList.add("block-display-js");
              
           }
           break;
            
            case 1:
                 block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                 if (block_to_be_displayed){
                    block_name= block_to_be_displayed.querySelector(".block-name-js");
                    block_name.innerHTML= `${item_name.innerHTML}`;
                    block_to_be_displayed.classList.add("block-display-js");
                    
                 }
                 break;
                 
                 case 2:
                    block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                    if (block_to_be_displayed){
                       block_name= block_to_be_displayed.querySelector(".block-name-js");
                       block_name.innerHTML= `${item_name.innerHTML}`;
                       block_to_be_displayed.classList.add("block-display-js");
                       
                    }
                    break;
                    case 3:
                        block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                        if (block_to_be_displayed){
                           block_name= block_to_be_displayed.querySelector(".block-name-js");
                           block_name.innerHTML= `${item_name.innerHTML}`;
                           block_to_be_displayed.classList.add("block-display-js");
                           
                        }
                        break;
                        case 4:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 5:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 6:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 7:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 8:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 9:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 10:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;
                            case 11:
                            block_to_be_displayed= document.querySelector(".coffeeLike-Char");
                            if (block_to_be_displayed){
                               block_name= block_to_be_displayed.querySelector(".block-name-js");
                               block_name.innerHTML= `${item_name.innerHTML}`;
                               block_to_be_displayed.classList.add("block-display-js");
                               
                            }
                            break;

            
                

        }
        O_C_event_active=false;
       
        
    })
});

O_C_exit.addEventListener("click", event=>{
    let to_be_closed= event.target.closest(".Add-ons");
    to_be_closed.classList.remove("block-display-js");
    O_C_event_active= true;
    body.classList.remove("no-scroll");

});

add_order_plus.addEventListener("click",()=>{
    let quantity= Number(item_quantity.innerHTML);
    quantity +=1;
    item_quantity.innerHTML=`${quantity}`;
});
add_order_minus.addEventListener("click",()=>{
    
    let quantity= Number(item_quantity.innerHTML);
    if(quantity>1){
        quantity -=1;
        item_quantity.innerHTML=`${quantity}`;


    }
    
});


function cat_list_event_closure(){
    cat_slide.classList.remove("cat-slide-js");
    cat_arrow.classList.remove("cat-arrow-js");
    html.classList.remove("html-js");
   }



/*function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let categories_text = document.querySelector(".categories-text");
            categories_text.innerHTML = entry.target.innerHTML;
        }
    });
}


let observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 1.0 
});


let elements = document.querySelectorAll(".categorie-name2");
elements.forEach(element => {
    observer.observe(element);
});


*/



/* Adding to cart handling codes*/
let listProducts=[];
let cart=[];
let add_to_cart= document.querySelector(".order-button");
let cart_page_elements= document.querySelector(".cart-page-elements");
let cartPrice = 0;
let cart_bar_item_count=0;
let cart_price_html= document.querySelector(".cart-bar-price");
let cart_quantity_html= document.querySelector(".cart-bar-items-count");



const initApp = function(){
    fetch("Reister'sOnline.json")
    .then(response=>response.json())
    .then(data=>{
        listProducts=data;
    });
}
initApp();

add_to_cart.addEventListener("click",event=>{
    /*let index=  listProducts.findIndex(n=>n.id == item);*/
    item= item-1;
    if (listProducts.length === 0) {
        console.log("Products are not loaded yet.");
        return;
    }

    let price= Number(listProducts[item].price);
    cartPrice += price;
    cart_price_html.innerHTML= `${cartPrice}`;
    cart_bar_item_count++;
    cart_quantity_html.innerHTML= `${cart_bar_item_count}`;
      
    addToCart(item);
});

function addToCart(elementID){

    let cartIndex =cart.findIndex(n=>n.id === listProducts[elementID].id);
    if(cartIndex>=0){
        cart[cartIndex].quantity +=1;
    }
    else{
        cart.push({
            id: listProducts[elementID].id,
            quantity:1
        });
    }
    addItemToHtml();
}

function addItemToHtml(){
    cart_page_elements.innerHTML="";
    cart.forEach(element=>{
        let newElement= document.createElement("div");
        newElement.classList.add("cart_item_row");
        newElement.innerHTML=`
        <div>
            <p>${listProducts.find(product=>product.id === element.id).name}</p>
        </div>
        <div class="C_price_delete">
            <p> $${listProducts.find(product=>product.id === element.id).price}</p>
            <i class="fa-solid fa-trash"></i>
             
        </div>
        
        `
        cart_page.appendChild(newElement);
    })

}

let cart_page= document.querySelector(".cart-page");
let cart_bar_lg= document.querySelector(".shoppingCart");
let cart_bar=document.querySelector(".cart-bar");

cart_bar.addEventListener("click",()=>{
       

            cart_page.classList.add("cart-page-sm");
        

        
})
cart_bar_lg.addEventListener("click", ()=>{
    cart_page.classList.add("cart-page-lg");
})
        