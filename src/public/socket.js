const socket = io()

/**
 * guarda una nueva nota
 * @param {string} title note title
 * @param {string} description note description
 */

const saveNote = (title, description) => {
    socket.emit('client:newnote', {
        title,
        description,
    })
};
const deleteNote = (id) => {
    socket.emit('client:deletenote', id);
};

const getNote = (id) => {
    socket.emit('client:getnote', id)
};

const updateNote = (id, title, description) => {
    socket.emit('client:updateNote', {
        id,
        title,
        description
    });
}


socket.on('server:newnote', appendNote);

socket.on('server:loadnotes', renderNotes);

socket.on('server:selectedNote', note => {
    // console.log(data);
    const title = document.querySelector('#title');
    const description = document.querySelector('#description');

    title.value = note.title;
    description.value = note.description;

    saveID = note.id;
})