const UpComingCards= document.getElementById('UpComingCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
const formCheckAndBusqueda = document.getElementById("form")
/* Seleccion los elementos de html */

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
  const datosFiltrados = [] /*Aqui van los elementos asociados a la condicion de abajo. */
  for (const dato of datos ) {
    if (dato.date > data.currentDate){
      datosFiltrados.push(dato)
    }
  }
  
  return datosFiltrados
}


const UpComingEvents = filtrarDatos(data.events)

function mostrarTarjeta (listaDeDatos, card) {
  card.innerHTML = " " /* Borro el contenido de card */
  for ( datas of listaDeDatos) { 
        const crear = crearTarjeta (datas)/* Manipular cada elemento de la lista UpcomingEvents en la plantillas sting  dado en crear tarjetas */
        card.innerHTML += crear /* Mostrar dicho string previamente manipulado  */
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
const categoriaDeEventos = UpComingEvents.map(categoria => categoria.category)

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
  console.log(allCheckboxes)
  /* Como lo anterior me devuelve un node list, para trabajarlo, lo converti en un array */
  const arrayChecks = Array.from(allCheckboxes)
  /* De este nuevo array solo quiero trabajar con el id */
  const arrayChecksMap = arrayChecks.map(elemento => elemento.id.toLowerCase())
  console.log(arrayChecksMap)
  /* De mi array eventos, filtro solo los objetos (evento) donde el valor de categoria es igual al valor de mi arrayCheckMaps */
  const filtrarEventos =  listaEventos.filter(evento => arrayChecksMap.includes(evento.category.toLowerCase()) || arrayChecksMap.length === 0)
  console.log(filtrarEventos)
  return filtrarEventos
  
}
/* filtroPorCheck(checkBoxes) /* Termina filtro por checkbox */ 

/* <--------------------------------------------------------------------------------------> */

function filtroPorBusqueda(valor, data) {

  if (valor === "") {
    return data
  }
  /*El filtro tiene los elementos de mi array UpComingEvents que incluyan el valor ingresado por el usuario (variable llamada valor Ingresado.) */
  const filtrobusqueda = data.filter(objeto => objeto.name.toLowerCase().includes(valor.toLowerCase()))
  console.log(filtrobusqueda) 
  return filtrobusqueda

}

buttonBusqueda.addEventListener("click", (e) => {
e.preventDefault()
const valorIngresado = inputBusqueda.value;
/* console.log(valorIngresado); */
let filtro = filtroPorBusqueda(valorIngresado,UpComingEvents)
/* filtroCruzado  almacena la funcion filtroPorCheck usando como argumento el filtro por busqueda*/
let filtroCruzado = filtroPorCheck(filtro)
mostrarTarjeta(filtroCruzado,UpComingCards)
 

});

checkBoxes.addEventListener('change', () => {
const valorIngresado = inputBusqueda.value;
let filtro = filtroPorBusqueda(valorIngresado,UpComingEvents)
let filtroCruzado = filtroPorCheck(filtro)
mostrarTarjeta(filtroCruzado,UpComingCards)
})

function filtroCruzado(valor,valor2){
filtroPorBusqueda(valor)
filtroPorCheck(valor2)
}

/* filtroCruzado() */