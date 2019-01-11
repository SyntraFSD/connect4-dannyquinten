var hamburger = document.querySelector('.Header-links--mobile-hamburger');
var dropdown = document.querySelector('.Header-links--mobile-dropdown');

function switcher(event) {
  /*if (dropdown.classList.contains('inactive')) {
    dropdown.classList.remove('inactive');
  } else {
    dropdown.classList.add('inactive');
  }*/
  dropdown.classList.toggle('active');
}

hamburger.addEventListener('click', switcher);
//# sourceMappingURL=index.js.map