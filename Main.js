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
ham_icon.addEventListener("click",()=>{
    ham_menu.classList.toggle("show-menu");
});

searcIcon.addEventListener("click", ()=>{
    searchBar.classList.toggle("show-searchBar");
    searcIcon.classList.toggle("S-H-media3Links");
    ham_icon.classList.toggle("S-H-media3Links");
    media3_links_searchIcon.classList.toggle("S-H-media3Links");
    let jobs_arrow= document.querySelector("#jobTypes-Arrow");
});

searchBar_close.addEventListener("click",()=>{
    searchBar.classList.toggle("show-searchBar");
    searcIcon.classList.toggle("S-H-media3Links");
    ham_icon.classList.toggle("S-H-media3Links");
    media3_links_searchIcon.classList.toggle("S-H-media3Links");
});

/*main page arrow button*/
Arrowsroll.addEventListener("click",()=>{
    window.scrollTo({top: 600, behavior:"smooth"});
});

job_arrow.addEventListener("click",()=>{
    job_typesOptions.classList.toggle("show-jobTypes");
    job_arrow.classList.toggle("jobs-arrow");
    
});