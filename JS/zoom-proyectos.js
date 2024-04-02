var contenedores = document.querySelectorAll(".box-img-mansory");
var imagenes = document.querySelectorAll(".img-proyecto");


contenedores.forEach(contenedor => {
    contenedor.addEventListener("mousemove", function(event){
        let contenedor = this;
        let img = contenedor.querySelector('img');
    
        let rect = contenedor.getBoundingClientRect();
        let clientX = event.clientX - rect.left;
        let clientY = event.clientY - rect.top; 
    
        let mWidth = this.offsetWidth
        let mHeight = this.offsetHeight
    
        clientX = clientX / mWidth * 100
        clientY = clientY / mHeight * 100
    
        img.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2)`;
        console.log(contenedor + " -" + img);
    
    });
    contenedor.addEventListener("mouseleave", function(event){
        let contenedor = this;
        let img = contenedor.querySelector('img');
        img.style.transform = 'translate(-50%,-50%) scale(1)';
    
    });
});
