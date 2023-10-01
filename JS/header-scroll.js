/*Evento de scoll sobre la ventana del navegador*/
window.addEventListener("scroll",function(){

    let elemento = document.querySelector("header");

    /*Cuando el escroll tenga posicion "50" le agrega otra clase css al header, cuando tenga posición inferior a "50" se la remmueve*/
    if(window.scrollY > 50)
        elemento.classList.add("header-scroll");
    else
        elemento.classList.remove("header-scroll");

})
