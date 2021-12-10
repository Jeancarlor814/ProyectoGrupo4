var entrada = document.getElementById('formulario');

console.log("entrada de datos");
entrada.addEventListener("submit" ,function(e){
    e.preventDefault();
    console.log('Me diste un click');

    var datos = new FormData(entrada);


    fetch('http://localhost:8080/producto/api/save',{
        method:'POST',
        body: JSON.stringify({
            codigo_producto: datos.get('codigoproducto'),
            nombre_producto:  datos.get('nombreproducto'),
            nitproveedor:  datos.get('nitproveedor'),
            precio_compra:  datos.get('preciocompra'),
            ivacompra:  datos.get('ivacompra'),
            precio_venta:  datos.get('precioventa'),

        }),
        headers:{
            "Content-type": "application/json"
        }
       
});
    fetch.onreadystatechange = alert('se agrego el producto');

});






