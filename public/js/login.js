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

function handleLoginRequest(event) {
  var request = event.target;

  if (request.readyState === 4) {
    console.log(request.status);

    if (request.status >= 200 && request.status < 300) {
      console.log('succes');
    } else {
      alert('How seg das nie just!');
    }
  }
}

function handleRegisterRequest(event) {
  var request = event.target;

  if (request.readyState === 4) {
    console.log(request.status);

    if (request.status >= 200 && request.status < 300) {
      console.log('succes');
    } else {
      alert('How seg das nie just!');
    }
  }
}

function login(event) {
  event.preventDefault();
  var formData = getFormData(loginForm);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

function register(event) {
  event.preventDefault();
  var formData = getFormData(registerForm);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleRegisterRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/register'); // welke methode en welke url naar server

  request.setRequestHeader('Content-Type', 'application/json'); // data is in jason form hoe processen

  request.send(JSON.stringify(formData));
}

goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);
//# sourceMappingURL=login.js.map