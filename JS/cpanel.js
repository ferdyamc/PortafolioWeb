document.addEventListener('DOMContentLoaded',function(){

    const form = document.getElementById("formulario");

    form.addEventListener("submit", function(event){
        event.preventDefault();

        const formData = {
            Titulo : document.getElementById("titulo").value,
            Descripcion : document.getElementById("descripcion").value
        }

        const jsonData = JSON.stringify(formData);
        console.log(jsonData)

        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            console.log("Solicitud completada!")
        }

        xhttp.open("POST", "../FILE/proyectos.json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(jsonData);

    })
})