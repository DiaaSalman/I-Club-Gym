/**** scrollToTop ****/
let scrollBtn = document.getElementById("to-top");
window.onscroll = function() {
    if(window.scrollY >= 300) {
            scrollBtn.style.bottom = "10px";
    }else {
        scrollBtn.style.bottom = "-100px";
    }
}

/**** Openning nav bar ****/
let openNav = document.getElementById("menu-icon");
let overlay = document.getElementById("overlay");
let closeNav = document.getElementById("close-icon");

openNav.onclick = function() {
    overlay.style.width = "100%"
    overlay.style.left = "0"
}
closeNav.onclick = function() {
    overlay.style.width = "0"
    overlay.style.left = "-50%"
}

/**** Trainer Slider ****/
const swiper = new Swiper('.swiper', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Default parameters
        slidesPerView: 1,
        spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    }
});

/***** Testimionals Slider ******/
let userTexts = document.getElementsByClassName("user-text");
let userImgs = document.getElementsByClassName("user-img");

function showReview() {
    for(userImg of userImgs){
        userImg.classList.remove("active")
    }
    for(userText of userTexts){
        userText.classList.remove("active-text")
    }
    let i = Array.from(userImgs).indexOf(event.target)
    userImgs[i].classList.add("active")
    userTexts[i].classList.add("active-text")
}

/********** Schedule Slider *********/
let days = document.querySelectorAll(".days span")
let text = document.querySelectorAll(".calender")

days.forEach((ele) => {
    ele.addEventListener("click", removeActive)
    ele.addEventListener("click", manageText)
})

// click on tabs
function removeActive() {
    days.forEach((e) => {
        e.classList.remove("active-tab");
        this.classList.add("active-tab");
    })
}

// Manage Text
function manageText() {
    text.forEach((txt) => {
        txt.style.display = "none";
    })
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    })
}

