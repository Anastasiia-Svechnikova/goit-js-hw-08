import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const restoredData = JSON.parse(localStorage.getItem('feedback-form-state'));
fillForm();

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

const data = {};

function onFormInput(e) {
  data.email = form.elements.email.value;
  data.message = form.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}

function onFormSubmit(e) {
  e.preventDefault();
  const messageInputRef = form.querySelector('textarea');
  const emailInputRef = form.querySelector('input');

  if (!form.elements.email.value) {
    emailInputRef.classList.add('input--error');
    return;
  }

  emailInputRef.classList.remove('input--error');

  if (!form.elements.message.value) {
    messageInputRef.classList.add('input--error');
    return;
  }
  messageInputRef.classList.remove('input--error');

  console.log(data);
  e.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function fillForm() {
  if (restoredData) {
    form.elements.email.value = restoredData.email;
    form.elements.message.value = restoredData.message;
  }
}
