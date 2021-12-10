console.log('correcto');
addEventListener('load',inicio, false);

function inicio(){
    var ref = document.getElementById('bot');
    ref.addEventListener('click',clickBoton, false);
    
}

function clickBoton(e){

    var numcontrol = document.getElementById('ingreso');
    envioDatos(numcontrol.value);
}
var conexion1;
function envioDatos(numcontrol){

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange= mostrarRespuesta;
    conexion1.open('GET', 'http://localhost:8082/proveedor/api/find/'+ numcontrol, true);
    conexion1.send();
 
}
var datos;

function mostrarRespuesta(){

    var respuesta = document.getElementById('respuesta');
    if(conexion1.readyState== 4 ){
        datos = JSON.parse(conexion1.responseText);
        let res = document.querySelector('#res');
        res.innerHTML = ` 
    <tr>
        <td>${datos.nit_proveedor}</td>
        <td>${datos.nombre_proveedor}</td>
        <td>${datos.direccion_proveedor}</td>
        <td>${datos.telefono_proveedor}</td>
        <td>${datos.ciudad_proveedor}</td>
    </tr>`
        
        respuesta.innerHTML= res;

    }else{
        console.log('espere por favor');
    }

}
