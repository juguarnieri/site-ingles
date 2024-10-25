
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(event) {
        this.classList.toggle('active'); // Alterna a classe "active"
        event.stopPropagation(); // Impede o evento de clicar em outros elementos
    });
});

// Fecha o submenu ao clicar fora dele
document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
        dropdown.classList.remove('active'); // Remove a classe "active"
    });
});
