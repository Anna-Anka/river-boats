$(function() {

    //Форма поиска
    const field = document.querySelectorAll('.search-form__field');
    field.forEach(item => {
        item.addEventListener('click', () => {
            item.parentNode.classList.add('search-form__item--active');
        });
    });

});