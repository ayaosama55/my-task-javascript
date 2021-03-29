/* shop cart */
let shopCart = document.querySelector(".cart");
let closeIcon = document.querySelector(".close-icon");
let yourCart = document.querySelector(".your-cart");
shopCart.addEventListener("click" , function () {
    yourCart.style.right = "0";
});
closeIcon.addEventListener("click" , function () {
    yourCart.style.right = "-100%";
});
/*****************************/
let searchicon = document.querySelector(".searchicon");
let icon_close = document.querySelector(".closeicon");
let searchbox = document.querySelector(".search-box");
searchicon.addEventListener("click", function() {
    //searchbox.style.top = "0";
    searchbox.style.display = "block";
});
icon_close.addEventListener("click", function() {
    //searchbox.style.top = "-100%";
    searchbox.style.display = "none";
});
/********************************/
let ourHeader = document.querySelector(".header-section");
let imgArray = ['slide-01.jpg' , 'slide-02.jpg' , 
'slide-03.jpg'];
let content1 = document.querySelector(".one");
let content2 = document.querySelector(".two");
let content3 = document.querySelector(".three");
let contentArray = [content1, content2, content3];
let i = 0;
setInterval(function () {
    ourHeader.style.backgroundImage = 'url("images/' + imgArray[i] + '")';
    if (i===0){
        contentArray[1].style.display = "none";
        contentArray[2].style.display = "none";
        contentArray[0].style.display = "block";
        i = i+1;
    } else if (i===1){
        contentArray[1].style.display = "block";
        contentArray[2].style.display = "none";
        contentArray[0].style.display = "none";
        i = i+1;
    } else if (i===2){
        contentArray[1].style.display = "none";
        contentArray[2].style.display = "block";
        contentArray[0].style.display = "none";
        i = 0;
    }
}, 5000);

let navBar = document.querySelector(".nav-bar");
let toTopButton = document.querySelector(".to-top");
window.onscroll = function () {
    if (window.scrollY >= 60 ) {
        document.querySelector(".top-bar").style.display = "none";
        navBar.style.position = "fixed";
        navBar.classList.add("fixed-nav");
    }
    if(window.scrollY < 60 ) {
        document.querySelector(".top-bar").style.display = "block";
        navBar.style.position = "relative";
        navBar.classList.remove("fixed-nav");
    }
    if (window.scrollY > 500) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}
toTopButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".header-section").scrollIntoView({
        behavior: "smooth"
    });
});

