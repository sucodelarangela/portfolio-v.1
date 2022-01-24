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
