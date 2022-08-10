const swiperOption: Record<string,unknown> = {
    slidesPerView: 5,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1300: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
        1000: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        768: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        640: {
            slidesPerView: 6,
            spaceBetween: 5,
        },
        320: {
            slidesPerGroup: 1,
            slidesPerView: 4,
            spaceBetween: 15,
        },
    },
}

export default swiperOption