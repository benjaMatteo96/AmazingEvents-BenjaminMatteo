import {mostrarTarjeta,filtroPorBusqueda,filtroPorCheck, crearCheckboxes, imprimirCheckboxes,filtrarDatosFuturos } from "../modules/funciones.js"

const UpComingCards = document.getElementById('UpComingCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then(response => {
    const newEventsobject = response;
    const currentDate = response.currentDate
    console.log(currentDate)
    const events = newEventsobject.events
    console.log(events)

    const datosfuturos= filtrarDatosFuturos(events,currentDate)
    console.log(datosfuturos)

    mostrarTarjeta(datosfuturos, UpComingCards)
    imprimirCheckboxes(datosfuturos, checkBoxes)
    filtrarDatosFuturos(datosfuturos,currentDate)
    
    buttonBusqueda.addEventListener("click", (e) => {
      e.preventDefault()
      const valorIngresado = inputBusqueda.value;
      console.log(typeof valorIngresado);
      let filtro = filtroPorBusqueda( valorIngresado, datosfuturos)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, UpComingCards)

    });

    checkBoxes.addEventListener('change', () => {

      const valorIngresado = inputBusqueda.value;
      console.log(valorIngresado)
      let filtro = filtroPorBusqueda(valorIngresado, datosfuturos)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, UpComingCards)
    })
  })






