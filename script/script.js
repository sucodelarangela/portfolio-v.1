//Effects on hover
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

function changeHeaderOnScroll() {
  if (window.scrollY >= navHeight) {
    header.classList.add('rolling')
  } else {
    header.classList.remove('rolling')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderOnScroll()
})

//Toggle menu open
const nav = document.querySelector('nav')
const menuButton = document.querySelectorAll('.toggle')

for (const elem of menuButton) {
  elem.addEventListener('click', () => {
    nav.classList.toggle('show')
  })
}

//Close menu when selecting
const menu = document.querySelectorAll('nav ul li a')

for (const item of menu) {
  item.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
