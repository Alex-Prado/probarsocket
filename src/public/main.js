


const noteform = document.querySelector('#noteform')
const title = document.querySelector('#title');
const description = document.querySelector('#description');



noteform.addEventListener('submit', e => {
    e.preventDefault();
    if (saveID) {
        updateNote(saveID, title.value, description.value)
    } else {

        saveNote(title.value, description.value);
    }
    title.value = '';
    description.value = '';

    title.focus();
})