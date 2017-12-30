const addButtonEl = document.querySelector('#add-button');
const inputEl = document.querySelector('#todo-input');
const listEl = document.querySelector('#todo-list');


function add() {
  const itemEl = document.createElement('div');
  itemEl.textContent = inputEl.value;
  listEl.appendChild(itemEl);
  inputEl.value = '';



  itemEl.addEventListener('click', e => {
    if (itemEl.classList.contains('complete')) {
      itemEl.classList.remove('complete');
    } else {
      itemEl.classList.add('complete');
    }
  });


  const removeButtonEl = document.createElement('div');
  itemEl.appendChild(removeButtonEl);
  removeButtonEl.textContent = 'x';

  removeButtonEl.addEventListener('click', e => {
    listEl.removeChild(itemEl);
  });
}