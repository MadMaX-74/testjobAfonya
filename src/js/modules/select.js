//Модуль для работы с кастомными селектами. Навешиваем классы для отображения списка с чекбоксами

const selects = () => {

    const selects = document.querySelectorAll('.filter-form-select');
    selects.forEach((select) => {
        select.addEventListener('click', (e) => {
            if (e.target.closest('.filter-form-select__header')) {
                select.querySelector('.filter-form-select__header_img').classList.toggle('block-arrow_active');
                select.querySelector('.filter-form-select__body').classList.toggle('filter-active');
            }
        })
    })


}

export default selects;