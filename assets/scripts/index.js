const homeCards = document.getElementById('homeCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
const formBusqueda = document.getElementById("form-busqueda")

function crearTarjeta(data) {

  return `<div class="card" style="width: 18rem;">
          <img src = "${data.image}" class="card-img-top" alt="Imagen">
            <div class="card-body">
              <h5 class="card-title"> ${data.name} </h5>
              <p class="card-text"> ${data.description}</p>
              <div class="d-flex justify-content-between">
                <p> ${data.price}</p>
                <a class="btn btn-primary" href="./assets/pages/details.html?id=${data._id}"> Details</a>
              </div>
            </div>
        </div>`
}

function mostrarTarjeta(listaDeDatos, card) {
  for (datas of listaDeDatos) {
    const crear = crearTarjeta(datas) /* Manipular cada elemento de la lista en el string dado en crear tarjetas */
    card.innerHTML = card.innerHTML + crear /* Mostrar dicho string previamente manipulado  */
  }

}
mostrarTarjeta(data.events, homeCards)

  /* CHECKBOXES linea 109 index.html */


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

function botonParaFiltrar () {
  console.log("Hola")
}
buttonBusqueda.addEventListener("click", botonParaFiltrar)

formBusqueda.addEventListener("submit", (event) => {
  event.preventDefault()

})


const inputsCheckbox= document.querySelectorAll("input[type='checkbox']")

console.log(inputsCheckbox.values)

/* IMPRESION DE CHECKBOX CON REDUCE */
/* const fnReduce = (acc,valorActual) => {
  return acc + `<div>
  <input type="checkbox" id="">
  <label for="">${valorActual}</label>
</div>`
}
const checkboxTemplate = categoriasSinRepetir.reduce(fnReduce, " ") 
checkBoxes.innerHTML=checkboxTemplate
console.log(checkboxTemplate)
 */