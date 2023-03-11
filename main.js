document.addEventListener('DOMContentLoaded', () => {
  new TypeIt("#animated", {
    speed: 150,
    loop: true,
  })
    .type('Profissional', { delay: 900 }).delete(12)
    .type('Flexivel', { delay: 900 }).delete(8)
    .type('Resiliente', { delay: 900 }).delete(10)
    .type('Proativo', { delay: 900 }).delete(8)
    .type('Organizado', { delay: 900 }).delete(10)
    .go();
})
const menu = document.getElementsByClassName('menu')
function abrirMenu() {
  menu[0].classList.remove('menu_')
  console.log("abriu")
}

function fecharMenu() {
  menu[0].classList.add('menu_')
  console.log("fechou")
}

