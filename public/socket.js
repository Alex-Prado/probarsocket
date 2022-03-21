"use strict";

var socket = io();
/**
 * guarda una nueva nota
 * @param {string} title note title
 * @param {string} description note description
 */

var saveNote = function saveNote(title, description) {
  socket.emit('client:newnote', {
    title: title,
    description: description
  });
};

var deleteNote = function deleteNote(id) {
  socket.emit('client:deletenote', id);
};

var getNote = function getNote(id) {
  socket.emit('client:getnote', id);
};

var updateNote = function updateNote(id, title, description) {
  socket.emit('client:updateNote', {
    id: id,
    title: title,
    description: description
  });
};

socket.on('server:newnote', appendNote);
socket.on('server:loadnotes', renderNotes);
socket.on('server:selectedNote', function (note) {
  // console.log(data);
  var title = document.querySelector('#title');
  var description = document.querySelector('#description');
  title.value = note.title;
  description.value = note.description;
  saveID = note.id;
});