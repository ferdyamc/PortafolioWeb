//variables----------------------------------------------
let boton = document.getElementById("btn-parrafo-sobremi"); //boton
let carta = document.getElementById("carta"); //carta
let bg = document.getElementById("background-carta"); //background
let estadocarta = 0; //estado

//eventos boton---------------------------------------

//pararse sobre boton
boton.addEventListener('mouseover', function(){

    estadocarta=1; //Cambia el estado a 1  
    carta.style.display="block"; //Cambia el valor de la propiedad display a block para la carta y el fondo
    bg.style.display="block"; 
    
    setTimeout(() => { // luego de 150 milisegundos valida si el estado continua en 1 y si es asi: cambia la opacidad de la carta y el fondo a 1
        if(estadocarta == 1){
            carta.style.opacity="1";
            bg.style.opacity="1"; 
        }     
    },150);

})

//salirse sobre boton
boton.addEventListener('mouseleave', function(){

    estadocarta = 0; //Cambia el estado a 0

    setTimeout(() => { // luego de 150 milisegundos cambia la opacidad de la carta y el fondo a 0
        carta.style.opacity="0";
        bg.style.opacity="0"; 
        
        if(estadocarta == 0) { // luego de 300 milisegundos valida si el estado continua en 0 y si es asi: //Cambia el valor de la propiedad display a none para el fondo y la carta
            setTimeout(() => {                
                carta.style.display="none";
                bg.style.display="none";                
            },300)
        }
    },150);  
})

//eventos carta---------------------------------------

//pararse sobre carta
carta.addEventListener('mouseover', function(){

    estadocarta=1;//Cambia el estado a 1  
    carta.style.display="block"; //Cambia el valor de la propiedad display a block para la carta y el fondo
    bg.style.display="block";
    
    setTimeout(() => { // luego de 150 milisegundos valida si el estado continua en 1 y si es asi: cambia la opacidad de la carta y el fondo a 1
        if(estadocarta == 1){
            carta.style.opacity="1";
            bg.style.opacity="1"; 
        }
        
    },150);
})

//salirse de la carta
carta.addEventListener('mouseleave', function(){

    estadocarta = 0; //Cambia el estado a 0

    setTimeout(() => { // luego de 150 milisegundos cambia la opacidad de la carta y el fondo a 0
        carta.style.opacity="0";
        bg.style.opacity="0"; 

        setTimeout(() => {// luego de 300 milisegundos valida si el estado continua en 0 y si es asi: //Cambia el valor de la propiedad display a none para el fondo y la carta           
            if(estadocarta == 0){
                carta.style.display="none";
                bg.style.display="none";
            }
        },300)
        
    },150);
})
