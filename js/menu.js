const menu = document.querySelector(".burger-btn");
const header = document.querySelector('header')

menu.addEventListener('click', () => {
  menu.classList.toggle('active')
  header.classList.toggle('active')
})