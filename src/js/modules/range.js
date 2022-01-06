//Функция отрисовки селекторов диапазона. Использовал библиотек noUIslider написанную на чистом JS.
//Функция запускается в функции addSelelct, в функцию поступают значения из DB.

import * as noUiSlider from 'nouislider';

const rangeLg = (selector, id1, id2, range1, range2, select1, select2) => {
    const rangeSlider = document.getElementById(selector);


    noUiSlider.create(rangeSlider, {
        start: [select1, select2],
        tooltips: false,
        connect: true,
        step: 1,
        range: {
            'min': range1,
            'max': range2
        },
        format: {
            to: function(value) {
                return parseInt(value);
            },
            from: function(value) {
                return parseInt(value);
            }
        }
    });

    const input0 = document.getElementById(id1);
    const input1 = document.getElementById(id2);
    const inputs = [input0, input1];

    rangeSlider.noUiSlider.on('update', (values, handle) => {
        inputs[handle].value = Math.round(values[handle]);
    });

    const setRangeSlider = (i, value) => {
        let arr = [null, null];
        arr[i] = value;

        rangeSlider.noUiSlider.set(arr);
    }

    inputs.forEach((el, index) => {
        el.addEventListener('change', (e) => {
            setRangeSlider(index, e.currentTarget.value);
        });
    });



};

export default rangeLg;