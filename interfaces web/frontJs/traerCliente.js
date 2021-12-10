console.log('hala desde traer por id');
addEventListener('load', primero, false);

function primero(){
    let ref = document.getElementById('cliente');
    ref.addEventListener('click', registro, false)
}

function registro(e){
    let id = document.getElementById('ingreso');
    envio(id.value);
}

let conexion;
function envio(id){

    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = mostrarId;
    conexion.open ('GET', 'http://localhost:8081/cliente/api/find/'+ id, true);
    conexion.send();
}

let datos1;

function mostrarId(){
    if(conexion.readyState==4){
        datos1 = JSON.parse(conexion.responseText);
        console.log(datos1);
        let res = document.querySelector('#res');
        res.innerHTML = `
        <tr>
            <td>${datos1.nombre}</td>
        </tr>
        `
        console.log('se trajo cliente');
    }
}
