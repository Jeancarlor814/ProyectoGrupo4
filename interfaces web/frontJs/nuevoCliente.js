var entrada = document.getElementById('formulario');

console.log("nuevo cliente");
entrada.addEventListener("submit" ,function(e){
    e.preventDefault();
    console.log('Me diste un click');

    var datos = new FormData(entrada);
    console.log(datos.get('cedula'));


    fetch('http://localhost:8081/cliente/api/save',{
        method:'POST',
        body: JSON.stringify({
            cedula: datos.get('cedula'),
            nombre:  datos.get('name'),
            direccion:  datos.get('direccion_cliente'),
            telefono:  datos.get('telefono_cliente'),
            correo:  datos.get('email_cliente'),

        }),
        headers:{
            "Content-type": "application/json"
        }
       
});
fetch.onreadystatechange = alert('se agrego el Cliente');

});
