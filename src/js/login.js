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

function showLoginAlert(content, success = false) {
  if (success) {
    loginAlert.classList.add('success');
  } else {
    loginAlert.classList.remove('success');
  }
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
      showLoginAlert('Joepie je bent ingelogd', true);
      /*
      1 - Check de response
      2 - Sla de token op in localStorage
      3 - Redirect naar closed.html
       */
      if (response.access_token) {
        window.localStorage.setItem('token', response.access_token);
        // window.history.pushState({}, 'Closed', 'closed.html');
        window.location = 'closed.html';d
      }
    } else if (request.status === 401) {
      showLoginAlert(response.error);
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
