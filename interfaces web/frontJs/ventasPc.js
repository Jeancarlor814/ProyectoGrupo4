function mostrarTabla(array) {
  const tabla = document.querySelector("#tablabody");
  const totalventas = document.querySelector("#totalventas");
  var ventasporcliente = [];
  var mostrartotal = 0;
  //las ventas se agrupan en arrays por cada cedula
  array.forEach((objeto) => {
    const cedula = objeto.cedula_cliente;
    if (!ventasporcliente[cedula]) {
      ventasporcliente[cedula] = [];
    }
    ventasporcliente[cedula].push(objeto);
  });
  //se recorre el array para sumar los totales
  //se muestran los datos en la tabla
  ventasporcliente.forEach((ventas) => {
    var cedulacliente = 0;
    var nombre = "";
    var ventatotal = 0;

    ventas.forEach((venta) => {
      cedulacliente = venta.cedula_cliente;
      nombre = venta.nombre_cliente;
      ventatotal += venta.totalventa;
      mostrartotal += venta.totalventa;
    });
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
  totalventas.innerHTML = "Total Ventas $ " + mostrartotal;
}
function comenzar() {
  //se hace la conexion con la apirest
  fetch("http://localhost:8083/ventas/api/all")
    .then((response) => response.json())
    .then((array) => {
      //devuelve la lista de ventas como array en formato json
      //se le pasa por parametro el array a la funcion
      mostrarTabla(array);
    });
}
window.addEventListener("load", comenzar, false);
