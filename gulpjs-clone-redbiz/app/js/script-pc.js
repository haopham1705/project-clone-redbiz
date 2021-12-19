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
        responsive: {
            // breakpoint from 767 up
            767: {
                nav: true,
                dots: false
            }
        }
    });

    // feedbackSlider.on("changed.owl.carousel", function (property) {
    //     var current = property.item.index;
    //     var prevThumb = $(property.target)
    //         .find(".owl-item")
    //         .eq(current)
    //         .prev()
    //         .find("img")
    //         .attr("src");
    //     var nextThumb = $(property.target)
    //         .find(".owl-item")
    //         .eq(current)
    //         .next()
    //         .find("img")
    //         .attr("src");
    //     var prevRating = $(property.target)
    //         .find(".owl-item")
    //         .eq(current)
    //         .prev()
    //         .find("span")
    //         .attr("data-rating");
    //     var nextRating = $(property.target)
    //         .find(".owl-item")
    //         .eq(current)
    //         .next()
    //         .find("span")
    //         .attr("data-rating");
    //     $(".thumb-prev").find("img").attr("src", prevThumb);
    //     $(".thumb-next").find("img").attr("src", nextThumb);
    //     $(".thumb-prev")
    //         .find("span")
    //         .next()
    //         .html(prevRating + '<i class="fa fa-star"></i>');
    //     $(".thumb-next")
    //         .find("span")
    //         .next()
    //         .html(nextRating + '<i class="fa fa-star"></i>');
    // });
    // $(".thumb-next").on("click", function () {
    //     feedbackSlider.trigger("next.owl.carousel", [300]);
    //     return false;
    // });
    // $(".thumb-prev").on("click", function () {
    //     feedbackSlider.trigger("prev.owl.carousel", [300]);
    //     return false;
    // });
}); //end ready