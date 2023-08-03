/* console.log (data.currentDate)
console.log(data.events[0].date) */

const pastCards= document.getElementById('pastCards')


function crearTarjeta (data){

  return `<div class="card" style="width: 18rem;">
          <img src = "${data.image}" class="card-img-top" alt="Imagen">
            <div class="card-body">
              <h5 class="card-title"> ${data.name} </h5>
              <p class="card-text"> ${data.description}</p>
              <div class="d-flex justify-content-between">
                <p> ${data.price}</p>
                <a href="../pages/details.html" target="__blank" class="btn btn-primary"> Details</a>
              </div>
            </div>
        </div>`
}

function filtrarDatos(datos){
  const datosFiltrados = []
  for (const dato of datos ) {
    if (dato.date < data.currentDate){
      datosFiltrados.push(dato)
    }
  }
  return datosFiltrados
}

const pastEvents = filtrarDatos(data.events)

function mostrarTarjeta (listaDeDatos, card) { 
  for ( datas of listaDeDatos) { 
      /* Necesito una condicion que me ayude a iterar solo datas con el valor date > a current data */
      /* if (data.date > data.currentDate){ */
        const crear = crearTarjeta (datas)/* Manipular cada elemento de la lista en el string dado en crear tarjetas */
        card.innerHTML = card.innerHTML + crear /* Mostrar dicho string previamente manipulado  */
      /* } */
  }
}

mostrarTarjeta(pastEvents, pastCards)  




