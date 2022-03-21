
import express from "express";
import { Server as webSocketServer } from "socket.io";
import http from 'http'
import { v4 as uuid } from "uuid";
import { protocol } from "socket.io-parser";

let notes = [];

const app = express()
const server = http.createServer(app)
const io = new webSocketServer(server)

// app.get('/', (req, res) => {
//     res.send('hola mundoddd')
// })
app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    console.log('nueva conexion : ', socket.id);

    socket.emit('server:loadnotes', notes)

    socket.on('client:newnote', newnote => {
        const note = { ...newnote, id: uuid() }

        notes.push(note);
        io.emit('server:newnote', note)
    });

    socket.on('client:deletenote', (noteId) => {
        notes = notes.filter((note) => note.id !== noteId);
        io.emit('server:loadnotes', notes);
    });

    socket.on('client:getnote', noteId => {
        const note = notes.find(note => note.id === noteId);
        socket.emit('server:selectedNote', note);
    });


    socket.on('client:updateNote', updateNote => {
        // console.log(note);
        notes = notes.map(note => {
            if (note.id === updateNote.id) {
                note.title = updateNote.title;
                note.description = updateNote.description;
            }
            return note
        });
        io.emit('server:loadnotes', notes);
    });
});


const PORT = process.env.PORT || 3000
// app.listen(3000)
server.listen(PORT)
console.log('server on port', PORT);