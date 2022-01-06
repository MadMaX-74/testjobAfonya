//Запрос на сервер. Использовал метод fetch. При получении ответа, данные деструктуризуются и запускается фенкция рендеринга addSelect

import addSelect from "./addSelect";

const query = () => {
    fetch('http://localhost:3000/items/')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            data.forEach(({ type, title, select, range, inputs, id }) => {
                addSelect(type, title, select, range, inputs, id);

            })
        })
        .catch((error) => { console.error(error) });
};

export default query;