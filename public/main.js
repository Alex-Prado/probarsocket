"use strict";

var noteform = document.querySelector('#noteform');
var title = document.querySelector('#title');
var description = document.querySelector('#description');
noteform.addEventListener('submit', function (e) {
  e.preventDefault();

  if (saveID) {
    updateNote(saveID, title.value, description.value);
  } else {
    saveNote(title.value, description.value);
  }

  title.value = '';
  description.value = '';
  title.focus();
});