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

    // Mostrar o botão de voltar ao topo apenas quando chegar ao final da página
    window.onscroll = function() {
        const button = document.getElementById('scrollTopBtn');
        const scrollPosition = document.documentElement.scrollTop + window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // Verifica se a rolagem está próxima do final
        if (scrollPosition >= documentHeight - 10) {
            button.style.display = 'block'; // Mostra o botão
        } else {
            button.style.display = 'none'; // Oculta o botão
        }
    };

    // Função para rolar até o topo
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
