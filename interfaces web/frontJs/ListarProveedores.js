document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    //console.log('funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://localhost:8082/proveedor/api/all' , true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            

            for(let item of datos){
             //console.log(item.nombre_producto);
             res.innerHTML += `
             <tr>
                    <td>${item.nit_proveedor}</td>
                    <td>${item.nombre_proveedor}</td>
                    <td>${item.direccion_proveedor}</td>
                    <td>${item.telefono_proveedor}</td>
                    <td>${item.ciudad_proveedor}</td>
                </tr>
             
             `
             
            }
        }
    }
}