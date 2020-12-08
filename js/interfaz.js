class Interfaz {
    constructor(){
        this.init();
        // resultado de eventos
        this.listado = document.querySelector('#resultado-eventos')
    }

    // metodo para cuando inicialice la app
    init(){
        this.imprimirCategorias();
    }
    // imprimir categorias
     imprimirCategorias(){
         const listaCategorias = eventbrite.obtenerCategorias()
         .then(categorias =>{
             const cats = categorias.categories;

             const selectCategoria = document.getElementById('listado-categorias');

             cats.forEach(cat => {
                 const option = document.createElement('option');
                 option.value = cat.id;
                 option.appendChild(document.createTextNode(cat.name_localized));
                 selectCategoria.appendChild(option); 
             });
         })
     }

     //metodo para imprimir mensajes: 2 parametros mensaje y clases
     mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases
        div.appendChild(document.createTextNode(mensaje));
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div)
        // quitar el alert
        setTimeout(()=>{
            this.limpiarMensaje();
        }, 3000)
     }
     // desaparece el mensaje en caso de que exista
     limpiarMensaje(){
     const alert = document.querySelector('.alert')
     if(alert){
         alert.remove()
     }
         
    }
}
