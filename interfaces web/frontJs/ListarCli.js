document.querySelector('#boton1').addEventListener('click', traerDatos);

function traerDatos(){
    //console.log('funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://localhost:8081/cliente/api/all' , true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#resi');
            res.innerHTML = '';

            for(let item of datos){
             //console.log(item.nombre_producto);
             res.innerHTML += `
             <tr>
                    <td>${item.cedula}</td>
                    <td>${item.nombre}</td>
                    <td>${item.direccion}</td>
                    <td>${item.telefono}</td>
                    <td>${item.correo}</td>
                </tr>
             
             `
             
            }
        }
    }
}