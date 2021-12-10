document.querySelector('#boton').addEventListener('click', traerDatos);

function traerDatos(){
    //console.log('funcion');

    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'http://localhost:8080/producto/api/all' , true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            //console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);
            let res = document.querySelector('#res');
            res.innerHTML = '';

            for(let item of datos){
             //console.log(item.nombre_producto);
             res.innerHTML += `
             <tr>
                    <td>${item.codigo_producto}</td>
                    <td>${item.nombre_producto}</td>
                    <td>${item.nitproveedor}</td>
                    <td>${item.precio_compra}</td>
                    <td>${item.ivacompra}</td>
                    <td>${item.precio_venta}</td>
                </tr>
             
             `
             
            }
        }
    }
}