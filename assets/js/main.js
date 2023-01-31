document.addEventListener('DOMContentLoaded', () => {

    const preloader = document.querySelector('#preloader');
    if (preloader) {
        window.addEventListener('load', () => {
            preloader.remove();
        });
    }

    new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    breakpoints: {
        320: {
        slidesPerView: 2,
        spaceBetween: 40
        },
        480: {
        slidesPerView: 3,
        spaceBetween: 60
        },
        640: {
        slidesPerView: 4,
        spaceBetween: 80
        },
        992: {
        slidesPerView: 6,
        spaceBetween: 120
        }
    }
    });

    /**
     * Init swiper slider with 1 slide at once in desktop view
     */
    new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
    });

    /**
     * Init swiper slider with 3 slides at once in desktop view
     */
    new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        spaceBetween: 40
        },

        1200: {
        slidesPerView: 3,
        spaceBetween: 40
        }
    }
    });

    window.addEventListener('load', () => {
        aos_init();
    });

    new PureCounter();

    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    let portfolionIsotope = document.querySelector('.portfolio-isotope');

    if(portfolionIsotope) {
        let portfolioFilter = portfolionIsotope.getAttribute('data-portfolio-filter') ? portfolioIsotope.getAttribute('data-portfolio-filter') : "*";
        let portfolioLayout = portfolionIsotope.getAttribute('data-portfolio-layout') ? portfolioIsotope.getAttribute('data-portfolio-layout') : "masonry";
        let portfolioSort = portfolionIsotope.getAttribute('data-portfolio-sort') ? portfolioIsotope.getAttribute('data-portfolio-sort') : "original-order"
        
        window.addEventListener('load', () => {
            let portfolioIsotope = new Isotope(document.querySelector('.portfolio-container'), {
                itemSelector: '.portfolio-item',
                filter: portfolioFilter,
                layoutMode: portfolioLayout,
                sortby: portfolioSort,
            });
        });

        let menuFilters = document.querySelectorAll('.portfolio-filter li');
        menuFilters.forEach(function (el) {
            el.addEventListener('click', () => {
                document.querySelector('.filter-active').classList.remove('.filter-active');
                this.classList.add('filter-active');
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                console.log(".")
            });
        }, false);
    };

});