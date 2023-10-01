
// Observar el elemento que deseas rastrear
const targetElement = document.querySelector('.time-line-bar');
// Caputar la posicion de referencia
const posref = document.querySelector(".pos-ref").getBoundingClientRect().top;
let estado;


// Crear una instancia u objeto "IntersectionObserver" para intersectar elementos que entren en pantalla
const observer = new IntersectionObserver(element => {
    element.forEach(e => {
    if (e.isIntersecting  ) {
      //Cuando intersectas elemntos hacia arriba (en dirección Norte)
      targetElement.classList.remove("animacion-barra-y-out")
      targetElement.classList.add("animacion-barra-y")
      console.log(estado)
      estado = 1;
      
    }//Cuando intersectas elemntos hacia abajo (en dirección Sur)
    else if(window.scrollY < posref && estado != 0 ){
        targetElement.classList.remove("animacion-barra-y")
        targetElement.classList.add("animacion-barra-y-out")
        console.log(e.intersectionRatio)
        estado = 0
    }
  });
});



observer.observe(targetElement);

