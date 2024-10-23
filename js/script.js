function toggleMenu() {
    // A função "toggleMenu" é chamada quando o ícone de menu hamburguer é clicado

    var menu = document.getElementById("matérias-menu");
    // A função acessa o elemento HTML com o id "matérias-menu", que é o menu que queremos mostrar ou esconder.

    menu.classList.toggle("active");
    // A classe "active" é adicionada ou removida do menu. Se o menu já tiver a classe "active", ela é removida, o que esconde o menu.
    // Caso o menu não tenha a classe "active", ela é adicionada, fazendo com que o menu seja exibido.
    // Isso é útil para alternar entre mostrar e esconder o menu.
}

function toggleSubmenu(event) {
    event.preventDefault(); 
    // Esta linha previne o comportamento padrão do evento de clique no link do submenu.
    // Sem isso, o clique no link levaria a uma nova página ou rolaria para outra seção da página (dependendo do link).

    var submenu = event.target.nextElementSibling;
    // A função acessa o elemento seguinte ao elemento que foi clicado (target), ou seja, o submenu que está logo após o link.
    // Isso funciona porque o submenu está no HTML logo após o link que o ativa.

    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
    // Esta linha usa um operador ternário para alternar o estilo de exibição do submenu.
    // Se o valor atual de `submenu.style.display` for "block" (o submenu está visível), ele será alterado para "none", escondendo o submenu.
    // Se o valor for diferente de "block" (o submenu está escondido ou em outro estado), ele será alterado para "block", mostrando o submenu.
}
