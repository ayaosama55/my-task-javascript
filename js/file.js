let loadPage = document.querySelector(".load");
window.onload = function () {
    loadPage.style.display = "none";
}
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
    document.querySelector(".head").scrollIntoView({
        behavior: "smooth"
    });
});
myIcon = document.querySelector(".iccon");
myList = document.querySelector(".menu-click > .classic-list >li.dropdown ul");
myIcon.addEventListener("click" , function () {
    if(myIcon.dataset.open == "close") {
        myList.style.display = "block";
        myIcon.dataset.open = "open";
        myIcon.classList.remove("fa-caret-down");
        myIcon.classList.add("fa-sort-up");
    } else if (myIcon.dataset.open == "open") {
        myList.style.display = "none";
        myIcon.dataset.open = "close";
        myIcon.classList.remove("fa-sort-up");
        myIcon.classList.add("fa-caret-down");
    }
});
myListIcon = document.querySelector(".micon");
mynavlist = document.querySelector(".menu-click"); 
myListIcon.addEventListener("click", function () {
    if(myListIcon.dataset.bar == "close") {
        mynavlist.style.display = "block";
        myListIcon.dataset.bar = "open";
        myListIcon.classList.remove("fa-bars");
        myListIcon.classList.add("fa-times");
        console.log("aya");
    } else if (myListIcon.dataset.bar == "open") {
        mynavlist.style.display = "none";
        myListIcon.dataset.bar = "close";
        myListIcon.classList.remove("fa-times");
        myListIcon.classList.add("fa-bars");
    }
});
/*****************************************************/

let searchBox = document.querySelector(".overview-product .container > .search");
let searchButton = document.querySelector(".overview-product .container .options .search");
let sericon = document.querySelector(".overview-product .container .options .search i");
let filterButton = document.querySelector(".overview-product .container .options .filter");
let filticon = document.querySelector(".overview-product .container .options .filter i ");
let filterBox = document.querySelector(".overview-product .filterbox");
searchButton.addEventListener("click", function () {
    if(searchButton.dataset.search == "close") {
        searchButton.dataset.search = "open";
        searchBox.style.display = "block";
        searchButton.style.color = "#fff";
        searchButton.style.backgroundColor = "#717FE0";
        searchButton.style.border = "1px solid #717FE0";
        sericon.classList.remove("fa-search");
        sericon.classList.add("fa-times");
        filterBox.style.display = "none";
        filticon.classList.remove("fa-times");
        filticon.classList.add("fa-sort-amount-down");
        filterButton.style.color = "#222";
        filterButton.style.backgroundColor = "#fff";
        filterButton.style.border = "1px solid rgb(199,199,199)";
        filterBox.style.display = "none";
    } else if(searchButton.dataset.search == "open") {
        searchButton.dataset.search = "close";
        searchBox.style.display = "none";
        searchButton.style.color = "#222";
        searchButton.style.backgroundColor = "#fff";
        searchButton.style.border = "1px solid rgb(199,199,199)";
        sericon.classList.remove("fa-times");
        sericon.classList.add("fa-search");
    }
});
filterButton.addEventListener("click", function () {
    if(filterButton.dataset.filter == "close") {
        filterButton.dataset.filter = "open";
        filterBox.style.display = "flex";
        filterButton.style.color = "#fff";
        filterButton.style.backgroundColor = "#717FE0";
        filterButton.style.border = "1px solid #717FE0";
        filticon.classList.remove("fa-sort-amount-down");
        filticon.classList.add("fa-times");
        sericon.classList.remove("fa-times");
        sericon.classList.add("fa-search");
        searchButton.style.color = "#222";
        searchButton.style.backgroundColor = "#fff";
        searchButton.style.border = "1px solid rgb(199,199,199)";
        searchBox.style.display = "none";
    } else if(filterButton.dataset.filter == "open") {
        filterButton.dataset.filter = "close";
        filterBox.style.display = "none";
        filterButton.style.color = "#222";
        filterButton.style.backgroundColor = "#fff";
        filterButton.style.border = "1px solid rgb(199,199,199)";
        filticon.classList.remove("fa-times");
        filticon.classList.add("fa-sort-amount-down");
    }
});

var menucount = document.getElementById("list");
var menubar = menucount.getElementsByClassName("but");
var prodBox = document.querySelectorAll(".overview-product .products-over .pro-box");
var x;
for (x = 0; x < menubar.length; x++) {
    menubar[x].addEventListener("click", function() {
        var current = menucount.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
        if (this.dataset.prod == "all") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                prodBox[t].style.display = "block";
            }
        } else if (this.dataset.prod == "women") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "women") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        } else if (this.dataset.prod == "men") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "men") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        } else if (this.dataset.prod == "bag") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                prodBox[t].style.display = "none";
            }
        } else if (this.dataset.prod == "shoes") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "shoes") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        } else if (this.dataset.prod == "Watches") {
            for(var t = 0; t < prodBox.length; t = t + 1){
                if (prodBox[t].dataset.kind == "Watches") {
                    prodBox[t].style.display = "block";
                } else {
                    prodBox[t].style.display = "none";
                }
            }
        }
    });
}

loveicon = document.querySelectorAll(".overview-product .products-over .pro-box .info div i");
for(var r = 0; r< loveicon.length ; r++){
    loveicon[r].addEventListener("click", function() {
        this.classList.remove("far");
        this.classList.add("fas");
        this.style.color = "#717fe0";
    });
}




