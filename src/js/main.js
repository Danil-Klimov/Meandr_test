'use strict';

$(document).ready(function () {
// валидация формы
  var form = document.querySelector('#form');
  var email = document.querySelector('#email');
  var allInputs = document.querySelectorAll('#form input');

  function showError(text) {
    var error = document.createElement('div');
    error.className='error';
    error.style.color = 'red';
    error.innerHTML = text;
    return error;
  }
  function removeError() {
    var errors = form.querySelectorAll('.error');
    for (var i = 0; i < errors.length; i++) {
      errors[i].remove()
    }
  }

  function inputIsEmpty() {
    for (var i = 0; i < allInputs.length; i++) {
      if (!allInputs[i].value) {
        var error = showError('Заполните поле');
        form[i].parentElement.insertBefore(error, allInputs[i]);
      }
    }
  }

  function emailIsCorrect() {
    var pattern  = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if(!pattern.test(email.value)) {
      var error = showError('Введите корректный email');
      email.parentElement.insertBefore(error, email);
      return false;
    }
  }

  $('#tel').mask("+7(999)999-99-99");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    removeError();
    inputIsEmpty();
    emailIsCorrect();
  }, false);

// svg support for IE 11
  svg4everybody();
});