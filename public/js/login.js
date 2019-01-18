var goToLogin = document.querySelector('#goToLogin');
var goToRegister = document.querySelector('#goToRegister');
var loginForm = document.querySelector('.Login');
var registerForm = document.querySelector('.Register');
var apiDomain = 'http://connect4.pienter.space';

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
  console.log(request);

  if (request.readyState === 4) {
    //console.log(JSON.parse(request.responseText));
    console.log(request.status);

    if (request.status >= 200 && request.status < 300) {
      console.log('success');
      console.log(request);
    } else {
      console.log('error');
      console.log(request);
    }
  }
}

function login(event) {
  event.preventDefault();
  var formData = getFormData(loginForm);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', apiDomain + '/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

function handleRegisterRequest(event) {
  var request = event.target;
  console.log(request);

  if (request.readyState === 4) {
    console.log(request.status);

    if (request.status >= 200 && request.status < 300) {
      console.log('success');
      console.log(request);
    } else {
      console.log('error');
      console.log(request);
    }
  }
}

function register(event) {
  event.preventDefault();
  var formData = getFormData(registerForm);
  var request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleRegisterRequest);
  request.open('POST', apiDomain + '/api/auth/register');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);
//# sourceMappingURL=login.js.map