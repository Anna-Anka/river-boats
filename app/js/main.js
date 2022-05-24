$(function() {

    //Форма поиска
    const field = document.querySelectorAll('.search-form__field');
    field.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.add('search-form__item--active');
        });
    });

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

});