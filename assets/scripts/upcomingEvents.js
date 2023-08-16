const UpComingCards = document.getElementById('UpComingCards')
const checkBoxes = document.getElementById("checkBoxes-container")
const inputBusqueda = document.getElementById("input-busqueda")
const buttonBusqueda = document.getElementById("button-busqueda")
const formCheckAndBusqueda = document.getElementById("form")
/* Seleccion los elementos de html */

fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(response => response.json())
  .then(response => {
    const newEventsobject = response;
    const currentDate = response.currentDate
    console.log(currentDate)
    const events = newEventsobject.events
    console.log(events)
   /*  const objectNames = events.map(objects => objects.name)
    console.log(objectNames) */
    mostrarTarjeta(events, UpComingCards)
    imprimirCheckboxes(events, checkBoxes)
    filtrarDatos(events,currentDate)
    /* filtroPorBusqueda(events,inputBusqueda.value)
    filtroPorCheck(events) */

    buttonBusqueda.addEventListener("click", (e) => {
      e.preventDefault()
      const valorIngresado = inputBusqueda.value;
      console.log(typeof valorIngresado);
      let filtro = filtroPorBusqueda( valorIngresado, events)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, UpComingCards)

    });

    checkBoxes.addEventListener('change', () => {

      const valorIngresado = inputBusqueda.value;
      console.log(valorIngresado)
      let filtro = filtroPorBusqueda(valorIngresado, events)
      let filtroCruzado = filtroPorCheck(filtro)
      mostrarTarjeta(filtroCruzado, UpComingCards)
    })
  })


function crearTarjeta(data) {

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

function filtrarDatos(datos,currentDate) {
  const datosFiltrados = [] /*Aqui van los elementos asociados a la condicion de abajo. */
  for (const dato of datos) {
    if (dato.date > currentDate) {
      datosFiltrados.push(dato)
    }
  }

  return datosFiltrados
}


// const UpComingEvents = filtrarDatos(data.events)

function mostrarTarjeta(listaDeDatos, card) {
  card.innerHTML = " " /* Borro el contenido de card */
  for (datas of listaDeDatos) {
    const crear = crearTarjeta(datas)/* Manipular cada elemento de la lista UpcomingEvents en la plantillas sting  dado en crear tarjetas */
    card.innerHTML += crear /* Mostrar dicho string previamente manipulado  */
  }
}
function crearCheckboxes(elemento) {
  return `<div>
           <input type="checkbox" id="${elemento}">
           <label for="${elemento}">${elemento}</label>
         </div>`
}


function imprimirCheckboxes(listaEventos, checkboxes) {
  const categoriaDeEventos = listaEventos.map(categoria => categoria.category)
  const set = new Set(categoriaDeEventos)
  const categoriasSinRepetir = Array.from(set)
  console.log(categoriasSinRepetir)
  for (const elemento of categoriasSinRepetir ) {

    const checkbox = crearCheckboxes(elemento)
    checkboxes.innerHTML += checkbox
  }
return categoriasSinRepetir
}

/* imprimirCheckboxes(categoriasSinRepetir, checkBoxes) */



function filtroPorCheck(listaEventos) {

  const allCheckboxes = document.querySelectorAll("input[type='checkbox']:checked")
  const arrayChecks = Array.from(allCheckboxes)
  const arrayChecksMap = arrayChecks.map(elemento => elemento.id.toLowerCase())
  const filtrarEventos = listaEventos.filter(evento => arrayChecksMap.includes(evento.category.toLowerCase()) || arrayChecksMap.length === 0)

  return filtrarEventos

}
/* filtroPorCheck(checkBoxes) /* Termina filtro por checkbox */

/* <--------------------------------------------------------------------------------------> */

function filtroPorBusqueda(valor, data) {
  console.log(data)
  if (valor === "") {
    return data
  }
  const filtrobusqueda = data.filter(objeto => objeto.name.toLowerCase().includes(valor.toLowerCase()))
  console.log(filtrobusqueda)
  return filtrobusqueda

}

/* function filtroCruzado(valor,valor2){
filtroPorBusqueda(valor)
filtroPorCheck(valor2)
}
 */
/* filtroCruzado() */