//variables----------------------------------------------
let boton = document.getElementById("btn-parrafo-sobremi");
let carta = document.getElementById("carta");
let estadocarta = 0;

let bg = document.getElementById("background-carta");

//eventos boton---------------------------------------

//pararse sobre boton
boton.addEventListener('mouseover', function(){

    estadocarta=1;
    
    carta.style.display="block";
    bg.style.display="block";
    
    setTimeout(() => {
        if(estadocarta == 1){
            carta.style.opacity="1";
            bg.style.opacity="1"; 
        }     
    },150);

})

//salirse sobre boton
boton.addEventListener('mouseleave', function(){

    estadocarta = 0;
    setTimeout(() => {

        
        carta.style.opacity="0";
        bg.style.opacity="0"; 
        if(estadocarta == 0) {
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

    carta.style.display="block";
    bg.style.display="block";
    estadocarta=1;
    setTimeout(() => {
        if(estadocarta == 1){
            carta.style.opacity="1";
            bg.style.opacity="1"; 
        }
        
    },150);
})

//salirse de la carta
carta.addEventListener('mouseleave', function(){
    estadocarta = 0;

    setTimeout(() => {
        carta.style.opacity="0";
        bg.style.opacity="0"; 
        setTimeout(() => {
            
            if(estadocarta == 0){
                carta.style.display="none";
                bg.style.display="none";
            }
        },300)
        
    },150);


})
