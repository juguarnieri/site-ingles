// Seleciona todos os itens de menu (elementos <li>) dentro de uma lista não ordenada (<ul>) na classe .menu-items
document.querySelectorAll('.menu-items ul li').forEach(item => {
    // Adiciona um ouvinte de evento de clique a cada item de menu
    item.addEventListener('click', function(event) {
        // Verifica se o item clicado possui um submenu (um elemento com a classe .submenu)
        const submenu = this.querySelector('.submenu');
        
        // Se o submenu existir
        if (submenu) {
            // Impede que a navegação padrão do link seja seguida
            event.preventDefault();
            // Alterna a classe 'active' no submenu, exibindo ou ocultando-o
            submenu.classList.toggle('active');
        }
    });
});
