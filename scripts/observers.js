// Switching colour of navbar
const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero-section");
const buttons = document.querySelector(".buttons");

const sectionOneOptions = {
  rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
      buttons.classList.add("visually-hidden");
    } else {
      header.classList.remove("nav-scrolled");
      buttons.classList.remove("visually-hidden");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// Ham menu

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const hamMenu = document.getElementsByClassName('ham-menu')[0]
const reservation = document.getElementsByClassName('reservation-button')[0]

toggleButton.addEventListener('click', () => {
  hamMenu.classList.toggle('active')
  toggleButton.classList.toggle('clicked')
})

reservation.addEventListener('click', () => {
  reservation.classList.toggle('dropdown-active')
})


