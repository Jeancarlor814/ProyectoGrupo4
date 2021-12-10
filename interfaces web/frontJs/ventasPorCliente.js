console.log("hola");

function mostrarTabla(array) {
  const tabla = document.querySelector("#tablabody");
  const totalventas = document.querySelector("#totalventas");
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

    console.log(cedulacliente);
    console.log(nombre);
    console.log(ventatotal);

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.innerHTML = cedulacliente;
    td2.innerHTML = nombre;
    td3.innerHTML = ventatotal;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tabla.appendChild(tr);
  });

  totalventas.innerHTML = "total ventas $ " + mostrartotal;
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
