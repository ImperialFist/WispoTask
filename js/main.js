new Swiper('.specialist-slider', {
    navigation: {
        nextEl: '.swipe-next',
        prevEl: '.swipe-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        
    },
 
    slidesPerView: 4,
    spaceBetween: 90,
    breakpoints:{
        375:{
            slidesPerView: 1
        },
        768:{
            slidesPerView:3,
            spaceBetween: 50,
        },
        1920:{
            slidesPerView:4,
        }
    }

});