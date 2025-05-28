
function OpenMobile () {
    let navHeader = document.getElementById('MobileNav'); 
    let mobileContainer = document.getElementById('mobileContainer');
    let icon = document.getElementById('iconOpen');

    if (navHeader.classList.contains('openMobile')) {
        navHeader.classList.remove('openMobile');
        icon.src = 'src/img/hamburger.png';
        
    } else {
        navHeader.classList.add('openMobile');
        icon.src = 'src/img/close.png';
    }

    if (mobileContainer.classList.contains('openContainer')) {
        mobileContainer.classList.remove('openContainer');
    } else {
        mobileContainer.classList.add('openContainer')
    }
}

document.addEventListener('click', function (event) {
    const mobileContainer = document.getElementById('mobileContainer');
    const mobileNav = document.getElementById('MobileNav');
    const icon = document.getElementById('iconOpen');

    // Verifica se o clique foi fora do menu e do botão do menu
    const clickedOutside = !mobileNav.contains(event.target) && !icon.contains(event.target);

    if (clickedOutside) {
        mobileContainer.classList.remove('openContainer');
        mobileNav.classList.remove('openMobile');
        icon.src = 'src/img/hamburger.png'; // troca o ícone de volta
    }
});

