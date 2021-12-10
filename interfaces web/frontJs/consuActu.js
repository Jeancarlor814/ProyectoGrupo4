console.log('correcto');
addEventListener('load',init, false);

function init(){
    var ref = document.getElementById('productos');
    ref.addEventListener('click',clickBoton, false);
    
}

function clickBoton(e){

    var numcontrol = document.getElementById('entrada');
    envioDatos(numcontrol.value);
}
var conexion1;
function envioDatos(numcontrol){

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange= mostrarRespuesta;
    conexion1.open('GET', 'http://localhost:8081/cliente/api/find/'+ numcontrol, true);
    conexion1.send();
 
}
var datos;

function mostrarRespuesta(){

    if(conexion1.readyState== 4 ){
        datos = JSON.parse(conexion1.responseText);
        let res = document.querySelector('#mostrar');
        res.innerHTML = ` 
    <tr>
        <td>${datos.cedula}</td>
        <td>${datos.nombre}</td>
        <td>${datos.direccion}</td>
        <td>${datos.telefono}</td>
        <td>${datos.correo}</td>
    </tr>`
        
        

    }else{
        console.log('espere por favor');
    }

}