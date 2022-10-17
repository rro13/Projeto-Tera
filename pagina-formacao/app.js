let hamburguerMenu = document.getElementsByClassName("mobile-menu")[0]
function showMenu() {
    let navList = document.getElementsByClassName('nav-list')[0];
    let iconUser = document.getElementById('icon');
    if(iconUser) {
        iconUser.parentNode.removeChild(iconUser);
    }
    navList.classList.toggle('active');
}
hamburguerMenu.addEventListener('click',showMenu)

// como fazer o icone user sumir quando abrir o menu mobile e reaparecer na tela de desktop