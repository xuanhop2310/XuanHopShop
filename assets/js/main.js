/*=============== SHOW MENU ===============*/
/*========== SHOW MENU =========*/
const navMenu = document.getElementById('nav-menu');
navToggle = document.getElementById('nav-toggle');
navClose = document.getElementById('nav-close');


/*========== MENU SHOW =========*/
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN =========*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu');
    })
} 

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader =() =>{
    const header = document.getElementById('header')
    this.scrollY >= 50  ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')               

}
window.addEventListener('scroll',scrollHeader)


// // Hiển Thị Giỏ Hàng
// // Modal
// var modal = document.getElementById("myModal");
// var btn = document.getElementById("cart");
// var close = document.getElementsByClassName("close")[0];
// var close_footer = document.getElementsByClassName("close-footer")[0];
// var order = document.getElementsByClassName("order")[0];
// btn.onclick = function () {
//   modal.style.display = "block";
// }
// close.onclick = function () {
//   modal.style.display = "none";
// }
// close_footer.onclick = function () {
//   modal.style.display = "none";
// }
// order.onclick = function () {
//   alert("Cảm ơn bạn đã thanh toán đơn hàng")
// }
// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// menu mobile
// var btn_menu = document.getElementById("btnmenu");
// btn_menu.addEventListener("click", function () {
//   var item_menu = document.getElementById("menutop");
//   if (item_menu.style.display === "block") {
//     item_menu.style.display = "none";
//   } else {
//     item_menu.style.display = "block";
//   }
// })
// var remove_cart = document.getElementsByClassName("btn-danger");
// for (var i = 0; i < remove_cart.length; i++) {
//   var button = remove_cart[i]
//   button.addEventListener("click", function () {
//     var button_remove = event.target
//     button_remove.parentElement.parentElement.remove()
//   })
// }


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageYOffset


  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
          }else{
            sectionsClass.classList.remove('active-link')
          }
  })
}
window.addEventListener('scroll',scrollActive)
/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () =>  themeButton.classList.contains(iconTheme)   ? 'ri-moon-line': 'ri-sun-line'


if(selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click',() =>{
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())

})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin:'top',
  distance:'60px',
  duration:2500,
  deplay:400,
})

sr.reveal(`.home__img, .newsletter__container, footer__logo,
        .footer__description, .footer__content, .footer__info`)
sr.reveal(`.home__data`,{origin: 'bottom'})
sr.reveal(`.about__data, .recently__data`,{origin: 'left'})
sr.reveal(`.about__img, .recently__img`,{origin: 'right'})
sr.reveal(`.popular__card`,{interval: 100})

var modal = document.getElementById("myModal");
var btn = document.getElementById("cart");
var close = document.getElementsByClassName("close")[0];
// tại sao lại có [0] như  thế này bởi vì mỗi close là một html colection nên khi mình muốn lấy giá trị html thì phải thêm [0]. 
var close_footer = document.getElementsByClassName("close-footer")[0];
var order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
  modal.style.display = "block";
}
close.onclick = function () {
  modal.style.display = "none";
}
close_footer.onclick = function () {
  modal.style.display = "none";
}
order.onclick = function () {
  alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}