const hamb_menu = document.querySelector('.hamburger-menu');
const icon_hamburger = document.querySelector('.fas.fa-bars');
const icon_x = document.querySelector('.fas.fa-times');
console.log (hamb_menu);

icon_hamburger.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "flex";
    }
    
);

icon_x.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "none";
    }
    
);