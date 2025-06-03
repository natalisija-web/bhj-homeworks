const open = document.querySelector('div.dropdown__value');
const list = document.querySelector('ul.dropdown__list');
const items = Array.from(document.getElementsByClassName('dropdown__link'));
const checkedValue = document.querySelector('div.dropdown__value');

open.addEventListener('click', function () {
    list.classList.toggle('dropdown__list_active')
});

items.forEach(item => {
    item.addEventListener('click', function () {
        event.preventDefault();
        checkedValue.textContent = item.textContent;
        list.classList.remove('dropdown__list_active');
    });
});