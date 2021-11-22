


//Selezione hamburger menu e creazione variabile
const hamb_menu = document.querySelector('.hamburger-menu');

// selezione icona hamburger e creazione variabile
const icon_hamburger = document.querySelector('.fas.fa-bars');

// selezione icona close e creazione variabile
const icon_x = document.querySelector('.fas.fa-times');

//creazione elemento lista hamburger menu
const hamb_lista = document.querySelector('.hamburger-menu ul');
hamb_lista.innerHTML += `<li><a href="#">Scopri il Salento</a></li>`;


// creazione evento "click" menu show, cambio colore icona X
icon_hamburger.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "flex";
        icon_x.style.color ="yellow";
    }
    
);

// creazione evento "click" menu close 
icon_x.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "none";
    }
    
);

