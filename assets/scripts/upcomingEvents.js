
const UpComingCards= document.getElementById('UpComingCards')
const checkBoxes = document.getElementById("checkBoxes-container")

function crearTarjeta (data){

  return `<div class="card" style="width: 18rem;">
          <img src = "${data.image}" class="card-img-top" alt="Imagen">
            <div class="card-body">
              <h5 class="card-title"> ${data.name} </h5>
              <p class="card-text"> ${data.description}</p>
              <div class="d-flex justify-content-between">
                <p> ${data.price}</p>
                <a href="../pages/details.html?id=${data._id}" class="btn btn-primary"> Details</a>
              </div>
            </div>
        </div>`
}

function filtrarDatos(datos){
  const datosFiltrados = []
  for (const dato of datos ) {
    if (dato.date > data.currentDate){
      datosFiltrados.push(dato)
    }
  }
  return datosFiltrados
}

const UpComingEvents = filtrarDatos(data.events)

function mostrarTarjeta (listaDeDatos, card) { 
  for ( datas of listaDeDatos) { 
      /* Necesito una condicion que me ayude a iterar solo datas con el valor date > a current data */
        const crear = crearTarjeta (datas)/* Manipular cada elemento de la lista en el string dado en crear tarjetas */
        card.innerHTML = card.innerHTML + crear /* Mostrar dicho string previamente manipulado  */
  }
}
mostrarTarjeta(UpComingEvents, UpComingCards)  

function crearCheckboxes(elemento){
  return `<div>
           <input type="checkbox" id="${elemento}">
           <label for="${elemento}">${elemento}</label>
         </div>`
 }


/* Creo una lista, que contenga como elementos, las categorias */
const categoriaDeEventos = data.events.map(categoria => categoria.category)

/* Hago que en mi lista de categorias no se repita ningun elemento */
/* Set es una estructura de datos */
const set = new Set (categoriaDeEventos)

/* Creo una nueva array con los elementos de mi constante set */
const categoriasSinRepetir = Array.from(set)

  function imprimirCheckboxes(listaEventos, checkboxes){
   
    for (const elemento of listaEventos) {
      
        const checkbox = crearCheckboxes(elemento)
        checkboxes.innerHTML+=checkbox  
      }
      
    } 

imprimirCheckboxes(categoriasSinRepetir, checkBoxes)
