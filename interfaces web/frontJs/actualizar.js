var entrada = document.getElementById("actualizar");

entrada.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Me diste un click");

  var datos = new FormData(entrada);

  fetch("http://localhost:8080/producto/api/actualizar", {
    method: "PUT",
    body: JSON.stringify({
      codigo_producto: datos.get("codigoproducto"),
      nombre_producto: datos.get("nombreproducto"),
      nitproveedor: datos.get("nitproveedor"),
      ivacompra: datos.get("ivacompra"),
      precio_compra: datos.get("preciocompra"),
      precio_venta: datos.get("precioventa"),
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
});
