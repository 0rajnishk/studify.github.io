/*==================== SHOW MENU ====================*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)
  
  // Validate that variables exist
  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          // We add the show-menu class to the div tag with the nav__menu class
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
  const scrollY = window.pageYOffset

  function scrollActive() {
  const sections = document.querySelectorAll('section');
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      const activeLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (activeLink) {
        activeLink.classList.add('active-link');
      }
    } else {
      const inactiveLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      if (inactiveLink) {
        inactiveLink.classList.remove('active-link');
      }
    }
  });
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
  const scrollTop = document.getElementById('scroll-top');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== SCROLL REVEAL ANIMATION ====================*/
// Auto-sliding the images
// Auto-sliding the images
var currentSlide = 0;
var sliderInterval = setInterval(nextSlide, 3000);

function nextSlide() {
currentSlide = (currentSlide + 1) % 3;
goToSlide(currentSlide);
}

function goToSlide(slideIndex) {
  // Get the slide elements and navigation buttons
  var slidesContainer = document.querySelector('.slides-container');
  var slides = document.querySelectorAll('.slide');
  var slideWidth = slides[0]?.offsetWidth;
  var navButtons = document.querySelectorAll('.navigation button');

  // Exit the function if slideIndex is out of bounds or slideWidth is undefined
  if (slideIndex < 0 || slideIndex >= slides.length || slideWidth === undefined) {
    return;
  }

  // Update the position of the slides container
  slidesContainer.style.transform = 'translateX(-' + slideWidth * slideIndex + 'px)';

  // Update the active state of the navigation buttons
  for (var i = 0; i < navButtons.length; i++) {
    navButtons[i].classList.remove('active');
  }

  if (navButtons[slideIndex]) {
    navButtons[slideIndex].classList.add('active');
  }

  // Stop the auto-sliding interval when user interacts with the slider
  clearInterval(sliderInterval);
}


// Handle navigation button clicks
var navButtons = document.querySelectorAll('.navigation button');
for (var i = 0; i < navButtons.length; i++) {
navButtons[i].addEventListener('click', function() {
  var slideIndex = parseInt(this.getAttribute('data-slide-index'));
  goToSlide(slideIndex);

  // Restart the auto-sliding interval after user interaction
  clearInterval(sliderInterval);
  sliderInterval = setInterval(nextSlide, 3000);
});
}

