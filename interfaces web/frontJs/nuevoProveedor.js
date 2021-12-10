var entrada = document.getElementById('formulario');

console.log("nuevo proveedor");
entrada.addEventListener("submit" ,function(e){
    e.preventDefault();
    console.log('Me diste un click');

    var datos = new FormData(entrada);

    fetch('http://localhost:8082/proveedor/api/save',{
        method:'POST',
        body: JSON.stringify({
            nit_proveedor: datos.get('nit_proveedor'),
            nombre_proveedor:  datos.get('name'),
            direccion_proveedor:  datos.get('direccion_proveedor'),
            telefono_proveedor:  datos.get('telefono_proveedor'),
            ciudad_proveedor:  datos.get('ciudad'),

        }),
        headers:{
            "Content-type": "application/json"
        }
       
});
fetch.onreadystatechange = alert('se agrego el proveedor');

});
