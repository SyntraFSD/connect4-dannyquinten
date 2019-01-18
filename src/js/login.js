const goToLogin = document.querySelector('#goToLogin');
const goToRegister = document.querySelector('#goToRegister');
const loginForm = document.querySelector('.Login');
const registerForm = document.querySelector('.Register');

function switchForm(event) {
  event.preventDefault();
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
}

function hideLoginAlert(){
  loginAlert.classList.add('hide');
}

function howloginAlert(content)

function getFormData(form) {
  const inputFields = form.querySelectorAll('input');
  const formData = {};
  inputFields.forEach(function(inputField) {
    formData[inputField.name] = inputField.value;
  });
  return formData;
}
function handleLoginRequest(event) {
  const request = event.target;
  if (request.readyState === 4) {
    const response = JSON.parse(request.responseText);
  }
    console.log(request.status);
    if (request.status >= 200 && request.status < 300) {

      console.log('succes');
    } else if (request.status)===401) {
       showloginalert.text


  }
}

function handleRegisterRequest(event) {
  const request = event.target;
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
  const formData = getFormData(loginForm);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleLoginRequest);
  request.open('POST', 'http://connect4.pienter.space/api/auth/login');
  request.setRequestHeader('Content-Type', 'application/json');
  request.send(JSON.stringify(formData));
}

function register(event) {
  event.preventDefault();
  const formData = getFormData(registerForm);
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', handleRegisterRequest) ;
  request.open('POST', 'http://connect4.pienter.space/api/auth/register'); // welke methode en welke url naar server
  request.setRequestHeader('Content-Type', 'application/json'); // data is in jason form hoe processen
  request.send(JSON.stringify(formData));
}


goToRegister.addEventListener('click', switchForm);
goToLogin.addEventListener('click', switchForm);
loginForm.addEventListener('submit', login);
registerForm.addEventListener('submit', register);
loginForm.addEventListener('input', function(event){
  console.log('input');
  loginAlert.classList.add('hide');
}