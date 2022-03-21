const notesList = document.querySelector('#notes');

let saveID = '';

const noteUI = note => {
    const div = document.createElement('div')

    div.innerHTML = `
    <div class='card card-body rounded-0 mb-2 animate__animated animate__fadeInUp'>
        <div class='d-flex justify-content-between'>
            <h1 class='h3 card-title'>${note.title}</h1>
            <div>
                <button class='btn btn-danger delete' data-id='${note.id}'>DELETE</button>
                <button class='btn btn-success update' data-id='${note.id}' >UPDATE</button>
            </div>
        </div>
        <p>${note.description}</p>
    </div>`;


    const btnDelete = div.querySelector('.delete');
    const btnUpdate = div.querySelector('.update');

    btnDelete.addEventListener('click', () => {
        deleteNote(btnDelete.dataset.id);
    });
    btnUpdate.addEventListener('click', () => {
        // console.log(btnUpdate.dataset.id);
        getNote(btnUpdate.dataset.id);
    })

    return div;
};


const renderNotes = (notes) => {
    notesList.innerHTML = '';

    notes.forEach((note) => {
        notesList.append(noteUI(note))
        // appendNote(note)
    });
};

const appendNote = note => {
    notesList.append(noteUI(note))
}