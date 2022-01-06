//модуль открытия фильтров (промежуточный экран)

const block = () => {
    const block = document.querySelector('.filter-header'),
        filter = document.querySelector('.filter-content'),
        filterImg = document.querySelector('.filter-header__img');

    block.addEventListener('click', () => {
        block.classList.toggle('filter-header_active');
        filter.classList.toggle('block-active');
        filterImg.classList.toggle('block-arrow_active');
    });


};

export default block;