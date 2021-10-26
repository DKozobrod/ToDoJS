

const createToDo = (title, form, list) => {
    const todoHeder = document.createElement('h1');
    const todoContainer = document.createElement('div');
    const todoRow = document.createElement('div');
    const wrapperForm = document.createElement('div');
    const wrapperList = document.createElement('div');

    todoContainer.classList.add('container');
    todoRow.classList.add('row');
    todoHeder.classList.add('text-center', 'mb-5', );
    wrapperForm.classList.add('col-6');
    wrapperList.classList.add('col-6');

    todoHeder.textContent = title;

    wrapperForm.append(form);
    wrapperList.append(list);
    todoRow.append(wrapperForm, wrapperList);

    todoContainer.append(todoHeder, todoRow);

    return todoContainer;
};

const createFormToDo = () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const textArea = document.createElement('textarea');
    const btmSubmit = document.createElement('button');

    input.placeholder = 'наименование';
    textArea.placeholder = 'описание';
    btmSubmit.textContent = 'Добавить';
    btmSubmit.type = 'submit';

    form.classList.add('form-group');
    input.classList.add('form-control', 'mb-3');
    textArea.classList.add('form-control', 'mb-3');
    btmSubmit.classList.add("btn", 'btn-primary', 'btn-lg', 'btn-block');
        
    form.append(input, textArea, btmSubmit);

    return { input, textArea, btmSubmit, form };
};

const createListToDo = () => {
    const listToDo = document.createElement('ul');
    listToDo.classList.add('list-group');
    return listToDo;
};

const createItemTodo = (id, titleItem) => {
    const itemToDo = document.createElement('li');
    const btnItem = document.createElement('button');

    itemToDo.classList.add('list-group-item', 'p-0', 'mb-3', 'border-0');
    btnItem.classList.add('btn', 'btn-light', 'border-primary', 'btn-block');

    btnItem.textContent = titleItem;
    btnItem.id = id;
    itemToDo.append(btnItem);

    return itemToDo;

};

const addToDoItem = (todoData, listToDo, nameToDo, descriptionToDo) => {
    const id = `todo${(+new Date()).toString(16)}`;
    const itemToDo = createItemTodo(id, nameToDo);

    todoData.push({ id, nameToDo, descriptionToDo });

    listToDo.append(itemToDo);
    console.log(todoData);
};


const initToDo = (selector, titleToDo) => {
    const todoData = [];

    const wrapper = document.querySelector(selector);
    const formToDo = createFormToDo();
    const listToDo = createListToDo();

    const todoApp = createToDo(titleToDo, formToDo.form, listToDo);

    wrapper.append(todoApp);

    formToDo.form.addEventListener('submit', event => {
    event.preventDefault();

    formToDo.input.classList.remove('is-invalid');
    formToDo.textArea.classList.remove('is-invalid');
    
    if (formToDo.input.value && formToDo.textArea.value) {
        addToDoItem(todoData, listToDo, formToDo.input.value, formToDo.input.value);
        formToDo.form.reset();
    } else {
        if (!formToDo.input.value) {
            formToDo.input.classList.add('is-invalid');
        }
        if (!formToDo.textArea.value) {
            formToDo.textArea.classList.add('is-invalid');
        }
    };
    });
};

initToDo('.app', 'Список дел')

// 1.45.40