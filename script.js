window.onload = function () {
    document.getElementById('plan').style.display = "block";
    document.getElementById('popup').style.display = "block";
};
//belirli butona tıklandığında gerçekleşicek olaylar
function popupbtn() {
    document.getElementById('plan').style.display = "none";
    document.getElementById('popup').style.display = "none";
}

var myIndex = 0;
carousel();

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});