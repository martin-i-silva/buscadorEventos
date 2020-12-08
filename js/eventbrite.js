class Eventbrite {
    constructor(){
        this.token_auth = 'OFJVLVK272KK5UH7VAM7';
        this.ordenar = 'start_asc';
    }
    // Mostrar resultados de la busqueda
    async obtenerEventos(evento, categoria){
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/venues/1/events/?order_by=${this.ordenar}&token=${this.token_auth}`)
    // No existe mas el Api de search en eventbrite
        const evento = await respuestaEvento.json();
        return {
            evento
        }
    }

    async obtenerCategorias(){
        // consultar las categorias a las rest api eventbrit
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)
        // Esperar la respuesta de las categorias y devolver un json

        const categorias = await respuestaCategorias.json();

        return categorias
    }
}
