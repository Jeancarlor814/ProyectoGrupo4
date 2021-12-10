
addEventListener('load',inicio, false);



function inicio(){
    var ref = document.getElementById('bot1');
    ref.addEventListener('click',clickBoton, false);
    
}

function clickBoton(e){

    var numcontrol = document.getElementById('id1');
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
        let res = document.querySelector('#res1');
        res.innerHTML = ` 
    <tr>

        <td>${datos.nombre_producto}</td>
        
    </tr>`
    let re = document.querySelector('#precio1');
    re.innerHTML = `
        <td>${datos.precio_venta}</td>

    `
    let cantidadOne= document.getElementById('cantidad1');
    let entradaTotal = cantidadOne.value;
    let total1= document.querySelector('#to1');
    total1.innerHTML= `
        <td>${datos.precio_venta*entradaTotal}</td>
    `
    
        

    }else{
        console.log('espere por favor');
        console.log('Se trajo producto primer casilla');
    }
    
}



addEventListener('load',inicio2, false);

let totalProducto2 = "hola no he cambiado";

function inicio2(){
    var ref = document.getElementById('bot2');
    ref.addEventListener('click',clickBoton2, false);
    
}

function clickBoton2(e){

    var numcontrol = document.getElementById('id2');
    envioDatos2(numcontrol.value);
}

function envioDatos2(numcontrol){

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange= mostrarRespuesta2;
    conexion1.open('GET', 'http://localhost:8080/producto/api/find/'+ numcontrol, true);
    conexion1.send();
 
}


function mostrarRespuesta2(){

    
    if(conexion1.readyState== 4 ){
        datos = JSON.parse(conexion1.responseText);
        let res = document.querySelector('#res2');
        res.innerHTML = ` 
    <tr>

        <td>${datos.nombre_producto}</td>
        
    </tr>`
    let re = document.querySelector('#precio2');
    re.innerHTML = `
        <td>${datos.precio_venta}</td>

    `
    let cantidadOne= document.getElementById('cantidad2');
    let entradaTotal = cantidadOne.value;
    let total1= document.querySelector('#to2');
    total1.innerHTML= `
        <td>${datos.precio_venta*entradaTotal}</td>
    `
        
    }else{
        console.log('espere por favor');
        console.log('Se trajo producto segunda casilla');
    }
    
}




addEventListener('load',inicio3, false);

function inicio3(){
    var ref = document.getElementById('bot3');
    ref.addEventListener('click',clickBoton3, false);
    
}

function clickBoton3(e){

    var numcontrol = document.getElementById('id3');
    envioDatos3(numcontrol.value);
}

function envioDatos3(numcontrol){

    conexion1 = new XMLHttpRequest();
    conexion1.onreadystatechange= mostrarRespuesta3;
    conexion1.open('GET', 'http://localhost:8080/producto/api/find/'+ numcontrol, true);
    conexion1.send();
 
}

let totalProducto3;
function mostrarRespuesta3 (){

    if(conexion1.readyState== 4 ){
        datos = JSON.parse(conexion1.responseText);
        let res = document.querySelector('#res3');
        res.innerHTML = ` 
    <tr>

        <td>${datos.nombre_producto}</td>
        
    </tr>`
    let re = document.querySelector('#precio3');
    re.innerHTML = `
        <td>${datos.precio_venta}</td>

    `
    let cantidadOne= document.getElementById('cantidad3');
    let entradaTotal = cantidadOne.value;
    let total1= document.querySelector('#to3');
    total1.innerHTML= `
        <td>${datos.precio_venta*entradaTotal}</td>
    `
    let totalProducto3= datos.precio_venta*entradaTotal;
    return totalProducto3;
        
    }else{
        console.log('espere por favor');
        console.log('Se trajo producto tercer casilla');
    }
    
    
}


addEventListener('load',total, false);

function total(){
    let boton= document.getElementById('totalizar');
    boton.addEventListener('click', totalizar,false);
}

function totalizar(){ 
    console.log('me diste click');
    


}

 