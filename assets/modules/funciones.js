export function crearTarjeta(data) {

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
export function mostrarTarjeta(listaDeDatos, card) {
  card.innerHTML = ""

  for (const datas of listaDeDatos) {
    const crear = crearTarjeta(datas)
    card.innerHTML = card.innerHTML + crear
  }

}
export function filtroPorBusqueda(valor, data) {
  console.log(data)
  if (valor === "") {
    return data
  }
  const filtrobusqueda = data.filter(objeto => objeto.name.toLowerCase().includes(valor.toLowerCase()))
  console.log(filtrobusqueda)
  return filtrobusqueda

}

export function filtroPorCheck(listaEventos) {

  const allCheckboxes = document.querySelectorAll("input[type='checkbox']:checked")
  const arrayChecks = Array.from(allCheckboxes)
  const arrayChecksMap = arrayChecks.map(elemento => elemento.id.toLowerCase())
  const filtrarEventos = listaEventos.filter(evento => arrayChecksMap.includes(evento.category.toLowerCase()) || arrayChecksMap.length === 0)

  return filtrarEventos

}

export function crearCheckboxes(elemento) {
  return `<div>
           <input type="checkbox" id="${elemento}">
           <label for="${elemento}">${elemento}</label>
         </div>`
}

export function imprimirCheckboxes(listaEventos, checkboxes) {
  const categoriaDeEventos = listaEventos.map(categoria => categoria.category)
  const set = new Set(categoriaDeEventos)
  const categoriasSinRepetir = Array.from(set)
  console.log(categoriasSinRepetir)
  for (const elemento of categoriasSinRepetir) {

    const checkbox = crearCheckboxes(elemento)
    checkboxes.innerHTML += checkbox
  }
  return categoriasSinRepetir
}