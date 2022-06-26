const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

const tituloSecao = document.getElementById("#secao-h3");

tituloSecao.className = "";