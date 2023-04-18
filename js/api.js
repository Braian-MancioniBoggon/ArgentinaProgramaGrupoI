//Dolar Argentino
const dolarBlue = document.querySelector("#dolarBlue");
const dolarObicial = document.querySelector("#dolarObicial");

dolarBlue.addEventListener("click", function () { obtenerDatos("Blue"); });
dolarObicial.addEventListener("click", function () { obtenerDatos("Oficial"); });

let obtenerDatos = (dolar) => {
  let url = `https://www.dolarsi.com/api/api.php?type=dolar`;
  const api = new XMLHttpRequest();
  api.open("GET", url, true);
  api.send();

  api.onreadystatechange = function () {
    if (this.status == 200 && this.readyState == 4) {
      let datos = JSON.parse(this.responseText);
      let mostrarDolar = document.querySelector("#mostrarDolar");
      mostrarDolar.innerHTML = "";

      for (let tipoDolar of datos) {
        if (tipoDolar.casa.nombre === dolar) {
          mostrarDolar.innerHTML += ` <h4>Dolar ${dolar}</h4>
                                      <p>Compra: <span>$${tipoDolar.casa.compra.slice(0, 6)}</span></p>
                                      <p>Venta: <span>$${tipoDolar.casa.venta.slice(0, 6)}</span></p>`
        }
      }
    }
  }
};