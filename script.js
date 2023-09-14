// Seleciona o elemento HTML com a classe 'menu' e armazena-o na variável 'menu'
const menu = document.querySelector('.menu');

// Seleciona o elemento HTML com a classe 'nav-menu' e armazena-o na variável 'NavMenu'
const NavMenu = document.querySelector('.nav-menu');

// Adiciona um ouvinte de evento de clique ao elemento 'menu'
menu.addEventListener('click', () => {
    // Alterna a classe 'ativo' no elemento 'menu', fazendo com que ele mude de aparência
    menu.classList.toggle('ativo');

    // Alterna a classe 'ativo' no elemento 'NavMenu', mostrando ou ocultando o menu de navegação
    NavMenu.classList.toggle('ativo');
});
