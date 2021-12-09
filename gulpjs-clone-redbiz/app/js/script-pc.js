
// Side Nabar action
function openNav() {
    document.getElementById("mySidenav").style.width = "80vw";
    // document.getElementById("app").style.marginLeft = "250px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("overlay-navbar").style.display = "block";
    // document.getElementById("app").style.backgroundColor = "rgba(0,0,0,0.4)";
} 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("app").style.marginLeft = "0";
    document.getElementById("overlay-navbar").style.display = "none";
    // document.body.style.backgroundColor = "#fff";
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