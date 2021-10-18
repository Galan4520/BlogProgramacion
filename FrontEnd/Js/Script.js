document.getElementById("icon-menu").addEventListener("click", mostrar_menu);

function mostrar_menu() {
    document.getElementById("move-Todo").classList.toggle('move-Todo-info');
    document.getElementById("show-menu").classList.toggle('MostrarLateral');
}