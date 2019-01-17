const goToLogin = document.querySelector('#goToLogin');
const goToRegister = document.querySelector('#goToRegister');
const loginForm = document.querySelector('.Login');
const registerForm = document.querySelector('.Register');

function switchForm(event) {
  event.preventDefault();
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
}
function getFormData(form) {
  const inputFields = form.querySelectorAll('input');
  const formData = {};
  inputFields.forEach(function (inputField) {
    formData[inputField.name] = inputField.value;
  });
  return formData;
}
function login(event){
  event.preventDefault();
  const formData = getFormData(loginForm);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', function (event) {
    console.log(event);
  });
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}
goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
loginForm.addEventListener('submit', login);
