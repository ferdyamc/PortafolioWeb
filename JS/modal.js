/*Elementos del DOM capturados*/
let btn_ver_imagen = $(".btn-icon");
let box_modal = $("#contenedor-modal");
let img_modal = $(".img-modal");
let imagenes_proyectos = $(".img-proyecto");
let btn_cerrar_modal = $(".btn_cerrar_modal");

/*Ocultar el modal al abrir el documento*/
box_modal.hide();

/*Evento de click sobre el botono ven imagen (Abre modal y muestra imagen)*/
btn_ver_imagen.click(function() {   
var index_button = btn_ver_imagen.index(this);
    img_modal.attr("src",imagenes_proyectos.eq(index_button).attr("src"));
    box_modal.fadeIn(100);
    document.body.style.overflow = "hidden";           
});

/*Evento de click sobre el botono cerrar imagen (Cierra modal)*/
btn_cerrar_modal.click(function() {            
    box_modal.fadeOut(100);
    document.body.style.overflow = "auto";            
});

    

