let hamburguerMenu = document.getElementsByClassName("mobile-menu")[0]
function showMenu() {
    let navList = document.getElementsByClassName("nav-list")[0];
    navList.classList.toggle('active');
    hamburguerMenu.classList.toggle('active');
}
hamburguerMenu.addEventListener('click',showMenu)
