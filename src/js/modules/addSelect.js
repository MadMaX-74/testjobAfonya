//Модуль рендеринга - получая данные с БД функция получает значения и сравнивает в зависимости от типа какой селект рендерить
import rangeLg from "./range";

const addSelect = (type, title, select, range, inputs, id) => {
    const filterForm = document.querySelector('.filter-form');
    if (type == 'select') {
        const elem = document.createElement('div');
        elem.classList.add('filter-form-select');
        elem.classList.add('dinamic');
        elem.classList.add('filter-form-select_active');

        elem.innerHTML = `
                        <div class="filter-form-select__header">
                            <span class="filter-form-select__header_current">${title}</span>
                            <img src="./img/arrow2.svg" alt="filter-arrow" class="filter-form-select__header_img">
                        </div>
                        <div class="filter-form-select__body">
                            <div class="filter-form-select__body_wrap">
                                <label><input type="checkbox" value="title1">${select.value1}</label>
                                <label><input type="checkbox" value="title2">${select.value2}</label>
                                <label><input type="checkbox" value="title3">${select.value3}</label>
                                <label><input type="checkbox" value="title4">${select.value4}</label>
                                <label><input type="checkbox" value="title5">${select.value5}</label>
                                <label><input type="checkbox" value="title6">${select.value6}</label>
                                <label><input type="checkbox" value="title7">${select.value7}</label>
                                <label><input type="checkbox" value="title8">${select.value8}</label>
                                <label><input type="checkbox" value="title9">${select.value9}</label>
                            </div>
                            <button class="filter-form-select__body_btn apply-btn">Применить</button>
                        </div>
    `
        filterForm.append(elem);
        elem.addEventListener('click', (e) => {
            if (e.target.matches('.filter-form-select__header_current')) {
                elem.querySelector('.filter-form-select__header_img').classList.toggle('block-arrow_active');
                elem.querySelector('.filter-form-select__body').classList.toggle('filter-active');
            }
        })
    } else {
        const elem = document.createElement('div');
        elem.classList.add('filter-form-range');
        elem.classList.add('dinamic');
        elem.innerHTML = `
                        <div class="filter-form-range__header">
                            <span class="filter-form-range__header_current">${title}</span>
                        </div>
                        <div class="filter-form-range__body">
                            <div class="filter-form-range__slider">
                                <div class="slider-styled" id="${id}"></div>
                            </div>
                            <div class="filter-form-range__inputs">
                                <label class="filter-form-range__inputs_label">
                                    <span class="filter-form-range__inputs_text">от</span>
                                    <input type="number" min="${range.value1}" max="${range.value2}" placeholder="${select.value1}" class="filter-form-range__inputs_input" id='${inputs.value1}'>
                                </label>
                                <label class="filter-form-range__inputs_label">
                                    <span class="filter-form-range__inputs_text">до</span>
                                    <input type="number" min="${range.value1}" max="${range.value2}" placeholder="${select.value2}" class="filter-form-range__inputs_input" id='${inputs.value2}'>
                                </label>
                            </div>
                        </div>

        `
        filterForm.append(elem);
        rangeLg(id, inputs.value1, inputs.value2, parseInt(range.value1), parseInt(range.value2), select.value1, select.value2);
    }

}

export default addSelect;