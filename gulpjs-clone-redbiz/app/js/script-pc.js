// Side Nabar action
function openNav() {
    document.getElementById("mySidenav").style.width = "80vw";
    document.getElementById("overlay-navbar").style.display = "block";
    document.getElementById("sidenav-list").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("app").style.marginLeft = "0";
    document.getElementById("overlay-navbar").style.display = "none";
    document.getElementById("sidenav-list").style.display = "none";
}

// home-head-slider
var swiperSliderHome = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// home-client
var swiperClient = new Swiper(".mySwiperCarousel", {
    slidesPerView: 6,
    spaceBetween: 8,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }
});

// Feedback
jQuery(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
    feedbackSlider.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>'
        ],
        // responsive: {
        //     767: {
        //         nav: true,
        //         dots: false
        //     }
        // }
    });
}); 
