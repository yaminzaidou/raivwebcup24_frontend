function initializeIconPosition(iconId) {
    const icon = document.getElementById(iconId);
    const maxX = document.querySelector('.map-container').clientWidth - 100; // 20 est une marge
    const maxY = document.querySelector('.map-container').clientHeight - 100;

    // Position initiale aléatoire dans les limites de la carte
    const initialX = Math.random() * maxX;
    const initialY = Math.random() * maxY;

    icon.style.left = initialX + 'px';
    icon.style.top = initialY + 'px';
}


// Initialisation des positions et démarrage de l'animation
window.onload = function () {
    initializeIconPosition('icon1');
    initializeIconPosition('icon2');
    initializeIconPosition('icon3');
    initializeIconPosition('icon4');
    initializeIconPosition('icon5');
    initializeIconPosition('icon6');
    initializeIconPosition('icon7');
    initializeIconPosition('icon8');
    initializeIconPosition('icon9');
    initializeIconPosition('icon10');
    initializeIconPosition('icon11');
    initializeIconPosition('icon12');
    initializeIconPosition('icon13');
    initializeIconPosition('icon14');
    initializeIconPosition('icon15');
    initializeIconPosition('icon16');
    initializeIconPosition('icon17');
    //animateIcons();
};
