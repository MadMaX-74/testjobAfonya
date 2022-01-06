//Вызов запроса с сервера, а также возврат фильтра в основное состояние

import query from "./query";

const startDB = () => {
    const showSelects = document.querySelector('.filter-content__show');
    const showSpan = document.querySelector('#show-span');
    const filters = document.querySelectorAll('.filter-form-select');
    showSelects.addEventListener('click', (event) => {
        event.preventDefault();
        showSpan.classList.toggle('show-span_active');
        if (showSpan.classList.contains('show-span_active')) {
            query();
            showSpan.textContent = 'меньше';
            filters.forEach((filter) => {
                filter.classList.add('filter-form-select_active');
            })
        } else {
            let removeSelects = document.querySelectorAll('.dinamic');
            removeSelects.forEach((removeSelect) => {
                removeSelect.remove();
            })
            showSpan.textContent = 'больше';
            filters.forEach((filter) => {
                filter.classList.remove('filter-form-select_active');
            })
        }
    });
}

export default startDB;