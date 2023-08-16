/* console.log(data.events) */
const queryString = location.search

const objetoUrl = new URLSearchParams(queryString)

const atributoId = objetoUrl.get("id") 

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(response  =>  {
    const newEventsarray = response;
    console.log(newEventsarray)
    const events = newEventsarray.events
    console.log(events)

    mostrarTarjeta(events,tarjetaDetails,atributoId)

  })

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
          <p>assistance: ${objeto.assistance ? objeto.assistance: objeto.estimate} </p>
          <p class="card-text"></p>
          <p>Price: ${objeto.price}</p>
        </div>
      </div>
    </div>
    </div>
    `
  }
  function mostrarTarjeta (array, card, idObjeto){
      const objetoId = array.find(elemento => elemento._id == idObjeto)
     
      const tarjetaCreada = crearCarta(objetoId)
   
      card.innerHTML = tarjetaCreada
  }
