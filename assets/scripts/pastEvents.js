import { mostrarTarjeta, filtroPorBusqueda, filtroPorCheck, crearCheckboxes, imprimirCheckboxes, filtrarDatosPasados} from "../modules/funciones.js"

const pastCards = document.getElementById('pastCards')
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

    const datosPasados = filtrarDatosPasados(events, currentDate)
    console.log(datosPasados)

    mostrarTarjeta(datosPasados, pastCards)
    imprimirCheckboxes(datosPasados, checkBoxes)
    filtrarDatosPasados(datosPasados, currentDate)

    buttonBusqueda.addEventListener("click", (e) => {
      e.preventDefault()
      const valorIngresado = inputBusqueda.value;
      console.log(typeof valorIngresado);
      let filtro = filtroPorBusqueda(valorIngresado, datosPasados)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, pastCards)

    });

    checkBoxes.addEventListener('change', () => {

      const valorIngresado = inputBusqueda.value;
      console.log(valorIngresado)
      let filtro = filtroPorBusqueda(valorIngresado, datosPasados)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, pastCards)
    })
  })






