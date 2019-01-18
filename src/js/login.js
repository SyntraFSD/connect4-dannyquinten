const goToLogin = document.querySelector('#goToLogin');
const goToRegister = document.querySelector('#goToRegister');
const loginForm = document.querySelector('.Login');
const loginAlert = document.querySelector('.Login-alert');
const registerForm = document.querySelector('.Register');
const apiDomain = 'http://connect4.pienter.space';

function switchForm(event) {
  event.preventDefault();
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
}
function hideLoginAlert() {
  loginAlert.classList.add('hide');
}
function showLoginAlert(content) {
  loginAlert.textContent = content;
  loginAlert.classList.remove('hide');
}
function getFormData(form) {
  const inputFields = form.querySelectorAll('input');
  const formData = {};
  inputFields.forEach((inputField) => {
    formData[inputField.name] = inputField.value;
  });
  return formData;
}

function handleLoginRequest(event) {
  const request = event.target;
  console.log(request);
  if (request.readyState === 4) {
    const response = JSON.parse(request.responseText);
    // console.log(JSON.parse(request.responseText));
    console.log(request.status);
    if (request.status >= 200 && request.status < 300) {
      console.log('success');
      console.log(request);
    } else if (request.status === 401) {
      showLoginAlert(response);
    }
  }
}

function login(event) {
  event.preventDefault();
  const formData = getFormData(loginForm);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', apiDomain + '/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

function handleRegisterRequest(event) {
  const request = event.target;
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
  const formData = getFormData(registerForm);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleRegisterRequest);
  request.open('POST', apiDomain + '/api/auth/register');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);
loginForm.addEventListener('input', hideLoginAlert);
