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

//Back to top
const backToTop = document.querySelector('.back-to-top')

function showBackToTop() {
  if (window.scrollY >= 600) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

window.addEventListener('scroll', () => {
  changeHeaderOnScroll()
  showBackToTop()
  activateMenuAtCurrentSection()
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

//Toggle light mode
const modeButton = document.querySelector('.mode')
const style = document.querySelector('#style')

function changeMode() {
  if (modeButton.classList.contains('icon-sun')) {
    modeButton.classList.remove('icon-sun')
    modeButton.classList.add('icon-moon')
  } else {
    modeButton.classList.remove('icon-moon')
    modeButton.classList.add('icon-sun')
  }
  style.disabled = !style.disabled
}

modeButton.addEventListener('click', changeMode)

//Effect on menu according to position
const sections = document.querySelectorAll('main section[id]') //all sections inside main with an id
console.log(sections)

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 12) * 4
  // numbers 8 and 4 reached by test and error. This is a general checkpoint for this page

  // for every section of the constant sections above
  for (const section of sections) {
    const sectionTop = section.offsetTop //gets coordinate of its top
    const sectionHeight = section.offsetHeight //gets its total height
    const sectionId = section.getAttribute('id') //gets its attribute (id)
    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    //if it's between the start and the end checkpoint...
    if (checkpointStart && checkpointEnd) {
      //...the document gets the 'anchor with the [href=#nameOfSectionId]' and adds a class '.active'
      document
        .querySelector('.menu ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('.menu ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}
