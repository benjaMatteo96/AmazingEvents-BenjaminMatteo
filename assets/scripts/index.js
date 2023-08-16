import {mostrarTarjeta} from "../modules/funciones.js"

const homeCards = document.getElementById('homeCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
/* const formCheckAndBusqueda = document.getElementById("form") */

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then(response => {
    const newEventsobject = response;

    const events = newEventsobject.events
    console.log(events)

    mostrarTarjeta(events, homeCards)
    imprimirCheckboxes(events,checkBoxes)
    /* filtroPorBusqueda(events,inputBusqueda.value)
    filtroPorCheck(events) */

    buttonBusqueda.addEventListener("click", (e) => {
      e.preventDefault()
      const valorIngresado = inputBusqueda.value;
      console.log(valorIngresado);
      let filtro = filtroPorBusqueda(events,valorIngresado)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, homeCards)
    
    });
    
    checkBoxes.addEventListener('change', () => {
    
      const valorIngresado = inputBusqueda.value;
    
      console.log(valorIngresado)
      let filtro = filtroPorBusqueda(events,valorIngresado)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, homeCards)
    })
  })

  .catch(error => console.log(error))

function crearCheckboxes(elemento) {
  return `<div>
            <input type="checkbox" id="${elemento}" value="${elemento}">
            <label for="${elemento}">${elemento}</label>
          </div>`
}
// const creaCheckbox = crearCheckboxes()
function imprimirCheckboxes(listaEventos, checkboxes) {

  const categoriaDeEventos = listaEventos.map(categoria => categoria.category)
  const set = new Set(categoriaDeEventos)
  const categoriasSinRepetir = Array.from(set)

  for (const elemento of categoriasSinRepetir) {
    const checkbox = crearCheckboxes(elemento)
    checkboxes.innerHTML += checkbox
  }

}

function filtroPorCheck(listaEventos) {

  const allCheckboxes = document.querySelectorAll("input[type='checkbox']:checked")
  const arrayChecks = Array.from(allCheckboxes)
  const arrayChecksMap = arrayChecks.map(elemento => elemento.value)
  const filtrarEventos = listaEventos.filter(evento => arrayChecksMap.includes(evento.category) || arrayChecksMap.length === 0)
  return filtrarEventos

}

function filtroPorBusqueda(array,valor) {
  console.log(valor)
  const filtrobusqueda = array.filter(objeto => objeto.name.toLowerCase().includes(valor.toLowerCase()))
  console.log(filtrobusqueda)

  return filtrobusqueda

}

                          
/* function filtroCruzado(valor, valor2) {
  filtroPorBusqueda(valor)
  filtroPorCheck(valor2)
  console.log(valor)
  console.log(valor2)

}

filtroCruzado() */
