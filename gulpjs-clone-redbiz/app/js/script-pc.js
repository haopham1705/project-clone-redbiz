
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
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false
    }
});

swiperSliderHome();
swiperClient();

// Product slider
$('#stage > .gallery').slick({
    arrows: false,
    dots: false,
    asNavFor: '#thumb-gallery',
});

$('#vertical-thumbs > .gallery').slick({
    arrows: false,
    dots: false,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#stage-gallery',
    slidesToShow: 1
});

$('#vertical-thumbs')
    .matchHeight({
        byRow: true,
        property: 'height',
        target: $('#stage'),
    })
    ._afterUpdate = function (event, groups) {
        var height = $('#vertical-thumbs').outerHeight(),
            itemHeight = $('#vertical-thumbs .thumb-item').first().outerHeight();

        var max = Math.floor(height / itemHeight);

        console.log('max', max);

        $('#vertical-thumbs > .gallery').slick('slickSetOption', 'slidesToShow', max, true);
    };

$('#vertical-thumbs .thumb').on('click', function () {

    var $a = $(this),
        targetIdx = $a.closest('.thumb-item').data('slickIndex');

    var $slick = $('#stage > .gallery');

    $slick.slick('slickGoTo', targetIdx, false);

});