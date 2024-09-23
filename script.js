function toggleSubmenu() {
    // Seleciona o submenu pelo ID
    var submenu = document.getElementById("submenu-id");
    
    // Verifica o valor atual da propriedade display e alterna entre 'block' e 'none'
    if (submenu.style.display === "block") {
        // Se o submenu estiver visível, esconde
        submenu.style.display = "none";
    } else {
        // Se o submenu estiver oculto, exibe
        submenu.style.display = "block";
    }
}
