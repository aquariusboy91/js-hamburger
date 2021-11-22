
//Selezione hamburger menu e creazione variabile

const hamb_menu = document.querySelector('.hamburger-menu');

// selezione icona hamburger e creazione variabile
const icon_hamburger = document.querySelector('.fas.fa-bars');

// selezione icona close e creazione variabile
const icon_x = document.querySelector('.fas.fa-times');

// creazione evento "click" menu show
icon_hamburger.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "flex";
    }
    
);

// creazione evento "click" menu close 
icon_x.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "none";
    }
    
);