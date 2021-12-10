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
    conexion1.open('GET', 'http://localhost:8080/producto/api/find/'+ numcontrol, true);
    conexion1.send();
 
}
var datos;

function mostrarRespuesta(){

    if(conexion1.readyState== 4 ){
        datos = JSON.parse(conexion1.responseText);
        let res = document.querySelector('#res');
        res.innerHTML = ` 
    <tr>
        <td>${datos.codigo_producto}</td>
        <td>${datos.nombre_producto}</td>
        <td>${datos.nitproveedor}</td>
        <td>${datos.precio_compra}</td>
        <td>${datos.ivacompra}</td>
        <td>${datos.precio_venta}</td>
    </tr>`
        
      

    }else{
        console.log('espere por favor');
    }

}
