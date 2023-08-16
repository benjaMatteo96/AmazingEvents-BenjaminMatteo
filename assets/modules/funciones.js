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