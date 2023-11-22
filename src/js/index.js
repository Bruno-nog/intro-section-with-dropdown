const iconeMenuAbrir = document.querySelector('.menu-hamburguer');
const iconeMenuFechar = document.querySelector('.menu-close')
const menuPrincipal = document.querySelector('.menu-principal');
const overlay = document.querySelector('.overlay');

iconeMenuAbrir.addEventListener('click', abrirMenu )
iconeMenuFechar.addEventListener('click', fecharMenu )

function abrirMenu(){
    menuPrincipal.classList.add('ativo');
    overlay.classList.add('ativo');

}

function fecharMenu(){
    menuPrincipal.classList.remove('ativo');
    overlay.classList.remove('ativo');
}