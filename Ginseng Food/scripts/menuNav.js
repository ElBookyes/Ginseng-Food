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
