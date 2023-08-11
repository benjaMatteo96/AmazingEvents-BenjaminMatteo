const homeCards = document.getElementById('homeCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
const formCheckAndBusqueda = document.getElementById("form")

console.log(data.events)

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

const creaTarjetas = crearTarjeta

function mostrarTarjeta(listaDeDatos, card) {
  card.innerHTML = ""
  for (datas of listaDeDatos) {
    const crear = crearTarjeta(datas) /* Manipular cada elemento de la lista en el string dado en crear tarjetas */
    card.innerHTML = card.innerHTML + crear /* Mostrar dicho string previamente manipulado  */
  }

}

/* Cree esta constante para ver si me sirve, para mostrar solo las tarjetas que cumplan
la condicion de si el valor nombre de los inputs check es igual al de la categoria de eventos */


mostrarTarjeta(data.events, homeCards)

  /* CHECKBOXES linea 109 index.html */


  function crearCheckboxes(elemento){
   return `<div>
            <input type="checkbox" id="${elemento}" value="${elemento}">
            <label for="${elemento}">${elemento}</label>
          </div>`
  }

  const creaCheckbox = crearCheckboxes()

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



function filtroPorCheck (listaEventos) {

    /* todos los inputs de tipo checkbox con la propiedad checked */
    const allCheckboxes= document.querySelectorAll("input[type='checkbox']:checked")
    /* Como lo anterior me devuelve un node list, para trabajarlo, lo converti en un array */
    const arrayChecks = Array.from(allCheckboxes)
    /* De este nuevo array solo quiero trabajar con el value */
    const arrayChecksMap = arrayChecks.map(elemento => elemento.value)
    /* De mi array eventos, filtro solo los objetos (evento) donde el valor de catgegoria es igual al valor de mi arrayCheckMaps */
    const filtrarEventos =  listaEventos.filter(evento => arrayChecksMap.includes(evento.category) || arrayChecksMap.length === 0)
    console.log(filtrarEventos)
    console.log(arrayChecksMap)
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
  mostrarTarjeta(filtroCruzado,homeCards)
  
 
});

checkBoxes.addEventListener('change', () => {
  
  const valorIngresado = inputBusqueda.value;

   console.log(valorIngresado)
  let filtro = filtroPorBusqueda(valorIngresado)
  let filtroCruzado = filtroPorCheck(filtro)
  mostrarTarjeta(filtroCruzado,homeCards)
})

function filtroCruzado(valor,valor2){
  filtroPorBusqueda(valor)
  filtroPorCheck(valor2)
  console.log(valor)
  console.log(valor2)

}

/* filtroCruzado() */