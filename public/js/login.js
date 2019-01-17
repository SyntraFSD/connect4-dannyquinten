var goToLogin = document.querySelector('#goToLogin');
var goToRegister = document.querySelector('#goToRegister');
var loginForm = document.querySelector('.Login');
var registerForm = document.querySelector('.Register');

function switchForm(event) {
  event.preventDefault();
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
}

function getFormData(form) {
  var inputFields = form.querySelectorAll('input');
  var formData = {};
  inputFields.forEach(function (inputField) {
    formData[inputField.name] = inputField.value;
  });
  return formData;
}

function login(event) {
  event.preventDefault();
  var formData = getFormData(loginForm);
  var request = new XMLHttpRequest();
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
//# sourceMappingURL=login.js.map