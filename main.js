const menu = document.getElementsByClassName('menu')

function fecharMenu(){
  menu[0].classList.add('sumir-menu')
  console.log("fechou")
}

function abrirMenu(){
  menu[0].classList.remove('sumir-menu')
  console.log("abriu")
}