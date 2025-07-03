let ham_icon= document.querySelector("#ham-icon");
let ham_menu= document.querySelector(".ham-menu");
let searcIcon= document.querySelector("#search-icon");
let searchBar= document.querySelector(".search-bar");
let media3_links_searchIcon= document.querySelector(".media3-links-searchIcon");
let searchBar_close= document.querySelector("#searchBar-close");
let Arrowsroll= document.querySelector("#scroll-arrow");
let job_arrow= document.querySelector("#jobTypes-Arrow");
let job_typesOptions= document.querySelector(".media3-jobsType");



/*manages the header search bar*/
if (ham_icon){
ham_icon.addEventListener("click",()=>{
    ham_menu.classList.toggle("show-menu");
});
}

if (searcIcon){
searcIcon.addEventListener("click", ()=>{
    searchBar.classList.toggle("show-searchBar");
    searcIcon.classList.toggle("S-H-media3Links");
    ham_icon.classList.toggle("S-H-media3Links");
    media3_links_searchIcon.classList.toggle("S-H-media3Links");
    let jobs_arrow= document.querySelector("#jobTypes-Arrow");
});
}

if(searchBar_close){
searchBar_close.addEventListener("click",()=>{
    searchBar.classList.toggle("show-searchBar");
    searcIcon.classList.toggle("S-H-media3Links");
    ham_icon.classList.toggle("S-H-media3Links");
    media3_links_searchIcon.classList.toggle("S-H-media3Links");
});
}


/*main page arrow button*/
if (Arrowsroll){
Arrowsroll.addEventListener("click",()=>{
    window.scrollTo({top: 600, behavior:"smooth"});
});
}


if (job_arrow){
job_arrow.addEventListener("click",()=>{
    job_typesOptions.classList.toggle("show-jobTypes");
    job_arrow.classList.toggle("jobs-arrow");
    
});

}


//handle screen resize events
let lastScreenIsLarge= window.innerWidth >= 980;
window.addEventListener("resize", () => {
    const isLarge = window.innerWidth >= 980;
    if (isLarge !== lastScreenIsLarge) {
        // The screen crossed the 900px boundary!
        if (isLarge) {
            // Switched to large screen (>=980px)
            
            //closing the hamburger menu when switching to big screens 
            if (ham_menu.classList.contains("show-menu")){
                ham_menu.classList.remove("show-menu");
            }
        
            
        } else {
            // Switched to small screen (<980px)
            if (job_typesOptions.classList.contains("show-jobTypes")){
                job_typesOptions.classList.remove("show-jobTypes");
                job_arrow.classList.remove("jobs-arrow");
            }
        }
        lastScreenIsLarge = isLarge; // Update the tracker
    }
});

//Managing window click events
document.body.addEventListener("click", (event)=>{
    if (ham_menu.classList.contains("show-menu")){
        if (ham_menu.contains(event.target)&& !event.target.closest(".ham-menu-link")){
            //do nothing
        }else{
            if (!ham_icon.contains(event.target)){
                ham_menu.classList.remove("show-menu");
            }
        }
    }

    //closing jop options slide when clicking out of its bounds
    if (job_typesOptions.classList.contains("show-jobTypes")){
        if (job_typesOptions.contains(event.target)&& !event.target.closest(".media3-link")){
            //do nothing
        }else{
            if (!job_arrow.contains(event.target)){
                job_typesOptions.classList.remove("show-jobTypes");
                job_arrow.classList.remove("jobs-arrow");
            }
        }
    }

});