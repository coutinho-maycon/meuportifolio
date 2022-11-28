'<template>
  <div class="h-screen bg-neutral-900 flex flex-col">    
    <div class="mx-auto">
      <ul class="flex gap-20 text-sidecar-100 font-semibold font-montserrat mt-5 ">
        <li class="hover:text-green-pea-600"><a href="">Home</a></li>
        <li class="hover:text-green-pea-600"><a href="">Sobre</a></li>
        <li class="hover:text-green-pea-600"><a href="">Contato</a></li>
        <li class="hover:text-green-pea-600"><a href="">Portifólio</a></li>
      </ul>
    </div>
    <div class="flex flex-col font-montserrat">
      <div class="bg-punch-600 max-w-max rounded-full mx-auto my-12 w-56">
        <img class="rounded-full" src="../assets/195b4dc0-a518-4ea2-9312-1ba34e44b237-removebg-preview.png" alt="">
      </div>      
      <p class="font-bold text-punch-600 mx-auto text-6xl">Maycon Coutinho</p>
      <p class="text-sidecar-100 font-bold mx-auto text-xl my-5">Desenvolvedor Web - Front End</p>
    </div>
    <div>      
    </div>
  </div>
  
  <div class="flex bg-neutral-800 text-sidecar-100 h-screen font-montserrat">
    <div class="flex container mx-60 mt-20">
      <img class="mx-auto h-1/2 mr-5 rounded-lg" src="../assets/99freela.png" alt="">
      <div>
        <h1 class="text-2xl font-montserrat font-semibold text-sidecar-100 text-left">Sobre Mim</h1>
      <p class="my-5 text-justify">Meu nome é Maycon Coutinho sou desenvolvedor front end, utilizo o framework para javascript Vue.Js e o framework css Tailwindcss, estou sempre estudando e me aperfeiçoando para me tornar um desenvolvedor full stack.  
      </p>
      <div class="grid grid-cols-2 border rounded-xl border-punch-600">
        <div class="p-4">
          <p>Nome: Maycon Coutinho</p>
          <p>Telefone: +55 11 944417100</p>
          <p>Experiência: 1 ano</p>
          <p>Skype: mrdarksalazar</p>
        </div>
        <div class="p-4">
          <p>Idade: 30</p>
          <p>Localização: Jundiaí - SP - Brasil</p>
          <p>Freelancer: Disponível</p>
          <p>Github:coutinho-maycon</p>
        </div>             
      </div>
      <button class="flex transition duration-700 ease-in-out bg-punch-600 rounded-full px-2 py-3 mt-5  hover:bg-green-pea-600 font-extrabold "><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"/></svg> Currículo em pdf</button>
      </div>      
    </div>       
  </div>  
</template>
<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

