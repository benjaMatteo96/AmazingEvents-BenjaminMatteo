/* console.log(data.events) */




const queryString = location.search /* Obteniendo el query string */

const objetoUrl = new URLSearchParams(queryString)

const atributoId = objetoUrl.get("id") /* obtengo el valor asociado a un query param */

/* Obtengo el filtrado de todos los objetos que sean iguales al valor de mi queryparam */
const objetoId = data.events.find(objetoId => objetoId._id === atributoId)
console.log(objetoId)

/* Obtengo mi elemento por Id */
const tarjetaDetails = document.getElementById("tarjeta-details")


function crearCarta (objeto) {
  return `<div class="card m-5">
  <div class="row g-0">
    <div class="col-md-8">
      <img src="${objeto.image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-4">
      <div class="card-body description">
        <h5 class="card-title"></h5>
        <p>Date: ${objeto.date}</p>
        <p>Category: ${objeto.category}</p>
        <p>Capacity: ${objeto.capacity}</p>
        <p>assistance: ${objeto.assistance} </p>
        <p class="card-text"></p>
        <p>Price: ${objeto.price}</p>
      </div>
    </div>
  </div>
  </div>
  `
}
const tarjetaCreada = crearCarta(objetoId)
tarjetaDetails.innerHTML = tarjetaCreada