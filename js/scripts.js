// menu on scroll

const menu = document.querySelector('.nav-menu')
var lastScrollTop = 0;
window.addEventListener('scroll', function (event) {
  let st = window.scrollY;
  if (st > lastScrollTop) {
    menu.style.height = 0
    menu.style.opacity = 0
  } else {
    menu.style.height = '11vh'
    menu.style.opacity = 1
  }
  lastScrollTop = st;
});

//toggle menu

let show = true
const menuSection = document.querySelector('.menu-section')
const toggleMenu = document.querySelector('.toggle-menu')
const intro = document.querySelector('.intro')

toggleMenu.addEventListener('click', () => {
  document.body.style.overflow = show ? "hidden" : "initial"

  menuSection.classList.toggle('on', show)
  toggleMenu.classList.toggle('active', show)

  show = !show

})