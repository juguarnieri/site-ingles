function toggleSubmenu(event) {
    event.preventDefault();
    const submenu = event.target.nextElementSibling;
    if (submenu.style.display === 'none' || submenu.style.display === '') {
        submenu.style.display = 'block';
    } else {
        submenu.style.display = 'none';
    }
}

function toggleMenu() {
    const menuItems = document.getElementById('matérias-menu');
    if (menuItems.style.display === 'none' || menuItems.style.display === '') {
        menuItems.style.display = 'block';
    } else {
        menuItems.style.display = 'none';
    }
}
