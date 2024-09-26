'use strict';

let menuElems = document.querySelectorAll('.menu_elem');

menuElems.forEach(menuElem =>{
    let submenu = menuElem.querySelector('.submenu');
    let btn = menuElem.querySelector('.menu_btn');

    menuElem.addEventListener('mouseenter', function(){
        submenu.classList.add('active');
        btn.classList.add('active');
    });

    menuElem.addEventListener('mouseleave', function(){
        submenu.classList.remove('active');
        btn.classList.remove('active');
    });
});