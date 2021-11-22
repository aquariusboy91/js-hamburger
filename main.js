const hamb_menu = document.querySelector('.hamburger-menu');
const icon_hamburger = document.querySelector('.fas.fa-bars');
console.log (hamb_menu);

icon_hamburger.addEventListener('click' , 
    function () {
        hamb_menu.style.display = "flex";
    }
    
);