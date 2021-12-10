console.log("Hola mundo");
var codigo = 0;
var cedula = 0;
var nombrecliente = "";
var arraydetvent = [];
var codigoproducto1 = 0;
var codigoproducto2 = 0;
var codigoproducto3 = 0;
var cantidadproducto1 = 0;
var cantidadproducto2 = 0;
var cantidadproducto3 = 0;
var iva1 = 0;
var iva2 = 0;
var iva3 = 0;
var ivaproducto1 = 0;
var ivaproducto2 = 0;
var ivaproducto3 = 0;
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valorproducto1 = 0;
var valorproducto2 = 0;
var valorproducto3 = 0;
var totalproducto1 = 0;
var totalproducto2 = 0;
var totalproducto3 = 0;
var valorventa = 0;
var ivatotal = 0;
var totalventa = 0;

function comenzar() {
  var consultarcliente = document.getElementById("consultarcliente");

  consultarcliente.addEventListener(
    "click",
    function () {
      cedula = document.getElementById("cedula").value;

      fetch("http://localhost:8081/cliente/api/find/" + cedula)
        .then((response) => response.json())
        .then((json) => {
          nombrecliente = json.nombre;

          document.getElementById("nombrecliente").value = nombrecliente;
        });
    },
    false
  );

  var consultarproducto1 = document.getElementById("consultarproducto1");

  consultarproducto1.addEventListener(
    "click",
    function () {
      codigoproducto1 = parseInt(document.getElementById("codigo1").value);

      fetch("http://localhost:8080/producto/api/find/" + codigoproducto1)
        .then((response) => response.json())
        .then((json) => {
          var nombre = (document.getElementById("nombreproducto1").value =
            json.nombre_producto);
          valor1 = json.precio_venta;
          iva1 = json.ivacompra;
        });
    },
    false
  );

  var consultarproducto2 = document.getElementById("consultarproducto2");

  consultarproducto2.addEventListener(
    "click",
    function () {
      codigoproducto2 = parseInt(document.getElementById("codigo2").value);

      fetch("http://localhost:8080/producto/api/find/" + codigoproducto2)
        .then((response) => response.json())
        .then((json) => {
          var nombre = (document.getElementById("nombreproducto2").value =
            json.nombre_producto);
          valor2 = json.precio_venta;
          iva2 = json.ivacompra;
        });
    },
    false
  );

  var consultarproducto3 = document.getElementById("consultarproducto3");

  consultarproducto3.addEventListener(
    "click",
    function () {
      codigoproducto3 = parseInt(document.getElementById("codigo3").value);

      fetch("http://localhost:8080/producto/api/find/" + codigoproducto3)
        .then((response) => response.json())
        .then((json) => {
          var nombre = (document.getElementById("nombreproducto3").value =
            json.nombre_producto);
          valor3 = json.precio_venta;
          iva3 = json.ivacompra;
        });
    },
    false
  );

  var confirmar = document.getElementById("totalizar");

  confirmar.addEventListener(
    "click",
    function () {
      cantidadproducto1 = parseInt(document.getElementById("cantidad1").value);
      valorproducto1 = valor1 * cantidadproducto1;
      ivaproducto1 = valorproducto1 * (iva1 / 100);
      totalproducto1 = valorproducto1 + ivaproducto1;

      arraydetvent.push({
        codigo_producto: codigoproducto1,
        cantidad_producto: cantidadproducto1,
        valor_venta: valorproducto1,
        valoriva: ivaproducto1,
        valor_total: totalproducto1,
      });

      cantidadproducto2 = parseInt(document.getElementById("cantidad2").value);
      valorproducto2 = valor2 * cantidadproducto2;
      ivaproducto2 = valorproducto2 * (iva2 / 100);
      totalproducto2 = valorproducto2 + ivaproducto2;

      arraydetvent.push({
        codigo_producto: codigoproducto2,
        cantidad_producto: cantidadproducto2,
        valor_venta: valorproducto2,
        valoriva: ivaproducto2,
        valor_total: totalproducto2,
      });

      cantidadproducto3 = parseInt(document.getElementById("cantidad3").value);
      valorproducto3 = valor3 * cantidadproducto3;
      ivaproducto3 = valorproducto3 * (iva3 / 100);
      totalproducto3 = valorproducto3 + ivaproducto3;

      arraydetvent.push({
        codigo_producto: codigoproducto3,
        cantidad_producto: cantidadproducto3,
        valor_venta: valorproducto3,
        valoriva: ivaproducto3,
        valor_total: totalproducto3,
      });

      valorventa += valorproducto1 + valorproducto2 + valorproducto3;
      ivatotal += ivaproducto1 + ivaproducto2 + ivaproducto3;
      totalventa += totalproducto1 + totalproducto2 + totalproducto3;

      let total = document.querySelector("#to1");
      total.innerHTML = `
			<td>${valorproducto1}</td>
		`;
      let total2 = document.querySelector("#to2");
      total2.innerHTML = `
			<td>${valorproducto2}</td>

		`;
      let total3 = document.querySelector("#to3");
      total3.innerHTML = `
			<td>${valorproducto3}</td>

		`;
      let totalVenta = document.querySelector("#totalventa");
      totalVenta.innerHTML = `
			<div>${valorventa}</div>
			
		`;
      let totalIva = document.querySelector("#totaliva");
      totalIva.innerHTML = `
			<div>${ivatotal}</div>
			
		`;
      let totalTodo = document.querySelector("#totalcompleto");
      totalTodo.innerHTML = `
			<div>${totalventa}</div>
			
		`;

      fetch("http://localhost:8083/ventas/api/save", {
        method: "POST",
        body: JSON.stringify({
          cedula_cliente: cedula,
          nombre_cliente: nombrecliente,
          detalleventas: arraydetvent,
          valorventa: valorventa,
          ivaventa: ivatotal,
          totalventa: totalventa,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    },
    false
  );
}

window.addEventListener("load", comenzar, false);
