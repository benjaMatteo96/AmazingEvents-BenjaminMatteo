/* console.log (data.currentDate)
console.log(data.events[0].date) */
const pastCards= document.getElementById('pastCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
const formCheckAndBusqueda = document.getElementById("form")


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
const creaTarjetas = crearTarjeta

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
  card.innerHTML = " "
  for ( datas of listaDeDatos) { 
      /* Necesito una condicion que me ayude a iterar solo datas con el valor date > a current data */
      /* if (data.date > data.currentDate){ */
        const crear = crearTarjeta (datas)/* Manipular cada elemento de la lista en el string dado en crear tarjetas */
        card.innerHTML +=crear /* Mostrar dicho string previamente manipulado  */
        
      /* } */
  }
}

mostrarTarjeta(pastEvents, pastCards)  

/* Plantilla de strings para crear checkbox */
function crearCheckboxes(elemento){
  return `<div>
           <input type="checkbox" id="${elemento}">
           <label for="${elemento}">${elemento}</label>
         </div>`
 }

/*  const creaCheckbox = crearCheckboxes() */
/* Creo una lista, que contenga como elementos, las categorias */
const categoriaDeEventos = pastEvents.map(categoria => categoria.category)

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

function filtroPorCheck (listaEventos) {

  /* todos los inputs de tipo checkbox con la propiedad checked */
  const allCheckboxes= document.querySelectorAll("input[type='checkbox']:checked")
  /* Como lo anterior me devuelve un node list, para trabajarlo, lo converti en un array */
  const arrayChecks = Array.from(allCheckboxes)
  /* De este nuevo array solo quiero trabajar con el value */
  const arrayChecksMap = arrayChecks.map(elemento => elemento.id.toLowerCase())
  /* De mi array eventos, filtro solo los objetos (evento) donde el valor de catgegoria es igual al valor de mi arrayCheckMaps */
  const filtrarEventos =  listaEventos.filter(evento => arrayChecksMap.includes(evento.category.toLowerCase()) || arrayChecksMap.length === 0)
  return filtrarEventos
  
}
/* filtroPorCheck(checkBoxes) /* Termina filtro por checkbox */ 

/* <--------------------------------------------------------------------------------------> */

function filtroPorBusqueda(valor) {
/* Guardo el valor ingresado por el usuario en una variable al hacer click en el boton */
  
  const filtrobusqueda = data.events.filter(objeto => objeto.name.toLowerCase().includes(valor.toLowerCase()))
  console.log(filtrobusqueda) 
  return filtrobusqueda

}

buttonBusqueda.addEventListener("click", (e) => {
e.preventDefault()
const valorIngresado = inputBusqueda.value;
/* console.log(valorIngresado); */
let filtro = filtroPorBusqueda(valorIngresado)
let filtroCruzado = filtroPorCheck(filtro)
mostrarTarjeta(filtroCruzado,pastCards)


});

checkBoxes.addEventListener('change', () => {
const valorIngresado = inputBusqueda.value;
/* console.log(valorIngresado); */
let filtro = filtroPorBusqueda(valorIngresado)
let filtroCruzado = filtroPorCheck(filtro)
mostrarTarjeta(filtroCruzado,pastCards)
})

function filtroCruzado(valor,valor2){
filtroPorBusqueda(valor)
filtroPorCheck(valor2)
console.log(valor)
console.log(valor2)

}

/* filtroCruzado() */



