var entrada = document.getElementById("actualizar");

entrada.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Me diste un click");

  var datos = new FormData(entrada);

  fetch("http://localhost:8081/cliente/api/actualizar", {
    method: "PUT",
    body: JSON.stringify({
      cedula: datos.get("cedula"),
      telefono: datos.get("telefono_cliente"),
      nombre: datos.get("name"),
      correo: datos.get("email_cliente"),
      direccion: datos.get("direccion_cliente"),
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  fetch.onreadystatechange = alert("se actualizo cliente");
});
