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

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
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

/* Start scroll go top js
============================================================================================ */
// var prevScrollpos = window.pageYOffset;
// function checkScrollGoTop() {

//     // Start effect fade in btn-go-top
//     if ($(this).scrollTop() <= 500) {
//         $('.scroll-to-top').fadeOut();
//     } else {
//         $('.scroll-to-top').fadeIn();
//     }

//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {
//         $('#btn_gotop').fadeIn('300');
//         document.querySelector("#btn_gotop").style.opacity = "1";
//     } else {
//         document.querySelector("#btn_gotop").style.opacity = "0";
//         $('#btn_gotop').fadeOut('fast');
//     }
//     prevScrollpos = currentScrollPos;
// End effect fade in btn-go-top
// }
/* End scroll go top js
============================================================================================ */

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
            "<i class='fas fa-angle-left'></i>",
            "<i class='fas fa-angle-right'></i>"
        ],
        responsive: {
            // breakpoint from 767 up
            767: {
                nav: true,
                dots: false
            }
        }
    });



    feedbackSlider.on("changed.owl.carousel", function (property) {
        var current = property.item.index;
        var prevThumb = $(property.target)
            .find(".owl-item")
            .eq(current)
            .prev()
            .find("img")
            .attr("src");
        var nextThumb = $(property.target)
            .find(".owl-item")
            .eq(current)
            .next()
            .find("img")
            .attr("src");
        var prevRating = $(property.target)
            .find(".owl-item")
            .eq(current)
            .prev()
            .find("span")
            .attr("data-rating");
        var nextRating = $(property.target)
            .find(".owl-item")
            .eq(current)
            .next()
            .find("span")
            .attr("data-rating");
        $(".thumb-prev").find("img").attr("src", prevThumb);
        $(".thumb-next").find("img").attr("src", nextThumb);
        $(".thumb-prev")
            .find("span")
            .next()
            .html(prevRating + '<i class="fa fa-star"></i>');
        $(".thumb-next")
            .find("span")
            .next()
            .html(nextRating + '<i class="fa fa-star"></i>');
    });
    $(".thumb-next").on("click", function () {
        feedbackSlider.trigger("next.owl.carousel", [300]);
        return false;
    });
    $(".thumb-prev").on("click", function () {
        feedbackSlider.trigger("prev.owl.carousel", [300]);
        return false;
    });
}); //end ready

