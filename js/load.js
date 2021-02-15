const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

const header = document.querySelectorAll('header')[0];
const sticky = header.offsetTop;

const mybutton = document.getElementById('myBtn');

const body = document.getElementById('all');
const loader = document.getElementById('loader-wrapper');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

function fixHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add('header');
  } else {
    header.classList.remove('header');
  }
}

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener('load', () => {
  setTimeout(() => {
    body.style.display = 'block';
    loader.style.display = 'none';
  }, 1500);
});

window.onscroll = function () {
  fixHeader();
  scrollFunction();
};
