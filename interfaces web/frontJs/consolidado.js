console.log("hola");
function mostrarTabla(array) {
  const totalventas = document.querySelector("#totalventas");
  const totalciudad = document.querySelector("#totalciudad");
  var ventasPorCliente = [];
  var mostrartotal = 0;

  array.forEach((objeto) => {
    const cedula = objeto.cedula_cliente;
    if (!ventasPorCliente[cedula]) {
      ventasPorCliente[cedula] = [];
    }
    ventasPorCliente[cedula].push(objeto);
  });

  ventasPorCliente.forEach((ventas) => {
    var cedulacliente = 0;
    var nombre = "";
    var ventatotal = 0;

    ventas.forEach((venta) => {
      cedulacliente = venta.cedula_cliente;
      nombre = venta.nombre_cliente;
      ventatotal += venta.totalventa;
      mostrartotal += venta.totalventa;
    });
  });

  totalventas.innerHTML = "total ventas $ " + mostrartotal;
  totalciudad.innerHTML = "$" + mostrartotal;
}

function clicker() {
  boton = document.getElementById("btnlistar");
  boton.addEventListener("click", comenzar);
}

function comenzar() {
  fetch("http://localhost:8083/ventas/api/all")
    .then((response) => response.json())
    .then((array) => {
      mostrarTabla(array);
    });
}
window.addEventListener("load", clicker, false);
