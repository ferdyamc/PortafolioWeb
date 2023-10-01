/*Captura del formulario*/
const $form = document.querySelector("#form")

/*Agregarle un evento de tipo "Submit" (Al enviar el fomulario)*/
$form.addEventListener('submit',handleSubmit)

/*Función asincrona que se dispara cuando ocurre el evento "submit" */
async function handleSubmit(event){
    /*Evita el refresco de pagina al enviar el formulario*/
    event.preventDefault();
    /*Crea una instacia u objeto de la api "Formspree" para enviar los datos y obtener la respuesta*/
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method:this.method,
        body: form,
        headers:{
            'Accept':'application/json'
        }
    })
    /*Si la respuesta es exitosa, limpia el formuario y muestra un alert a través de un metodo de la librería "SweetAlert2"*/
    if(response.ok){
        this.reset();
        Swal.fire({
            title: 'Mail enviado',
            text: '¡Listo! Tu correo fue enviado con exito',
            icon: 'success',
            confirmButtonText: 'Ok'
            })
    }
}
