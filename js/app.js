const eventbrite = new Eventbrite();

const ui = new Interfaz();

//listener al buscador

document.getElementById('buscarBtn').addEventListener('click', (e)=>{
    e.preventDefault();
    // leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value 

    // leer el texto del select
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value;
 

    //revisar que haya algo escrito en el buscador
    if(textoBuscador !== ''){
        // cuando si hay una busqueda
        eventbrite.obtenerEventos(textoBuscador, categoriaSeleccionada) 
            .then(eventos=>{
                console.log(eventos)
            })
    } else{
        // mostrar mensaje de alerta
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4')
    }
})