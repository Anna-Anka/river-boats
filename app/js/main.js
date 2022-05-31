$(function () {

    //Форма поиска
    const field = document.querySelectorAll('.search-form__field');
    field.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.add('search-form__item--active');
        });
    });

    //Рейтинг
    $('.product-card__stars').rateYo({
        starWidth: '24px',
        normalFill: '#0D7331',
        readOnly: true,
        spacing: '4px',
        starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d = "M9.07359 0.633C9.39359 -0.211 10.6046 -0.211 10.9256 0.633L12.9956 6.367C13.0678 6.55379 13.195 6.71428 13.3603 6.8273C13.5256 6.94031 13.7213 7.00053 13.9216 7H19.0086C19.9486 7 20.3586 8.17 19.6196 8.743L15.9996 12C15.8374 12.1247 15.7189 12.2975 15.6611 12.4937C15.6032 12.6898 15.609 12.8993 15.6776 13.092L16.9996 18.695C17.3216 19.595 16.2796 20.368 15.4916 19.814L10.5746 16.694C10.4062 16.5757 10.2054 16.5122 9.99959 16.5122C9.79377 16.5122 9.59297 16.5757 9.42459 16.694L4.50759 19.814C3.72059 20.368 2.67759 19.594 2.99959 18.695L4.32159 13.092C4.39017 12.8993 4.39595 12.6898 4.3381 12.4937C4.28025 12.2975 4.16175 12.1247 3.99959 12L0.379588 8.743C-0.360412 8.17 0.0515882 7 0.989588 7H6.07659C6.27688 7.00067 6.47265 6.9405 6.63801 6.82747C6.80336 6.71444 6.93049 6.55387 7.00259 6.367L9.07259 0.633H9.07359Z"fill = "#0D7331" /></svg>'
    });

    //Слайдер в отзывах
    $('.reviews__items').slick({
        arrows: false,
        dots: true,
    });

    //Слайдер на странице товара
    $('.product__big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.product__items'
    });
    $('.product__items').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.product__big',
        centerMode: true,
        focusOnSelect: true
    });

    //Количество товара
    $('.product-card__number').styler();


    //Счетчик
    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    function initializeClock(id, endtime) {
        const clock = document.querySelector('.offer__items');
        // const daysSpan = clock.querySelector('.promo__days');
        const hoursSpan = clock.querySelector('.offer__item--hours');
        const minutesSpan = clock.querySelector('.offer__item--minutes');
        const secondsSpan = clock.querySelector('.offer__item--seconds');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            // daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        const timeinterval = setInterval(updateClock, 1000);
    }

    const deadline = $('.offer__items').attr('data-time');
    initializeClock('offer__items', deadline);

    var mixer = mixitup('.mini-catalog__items');
    var mixer2 = mixitup('.catalog__items');

});