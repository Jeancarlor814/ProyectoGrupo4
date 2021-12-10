console.log('se inicio eliminar');
addEventListener('load', empezar, false);

function empezar(){
    var ref = document.getElementById('eliminar');
    ref.addEventListener('click', onClick, false);

}

function onClick(){
    var idBorrar = document.getElementById('ingreso');
    eliminarDatos(idBorrar.value);
    console.log('click');
}

var borrar;

function eliminarDatos(idBorrar){
    borrar = new XMLHttpRequest();
    borrar.onreadystatechange = alert('se elimino el producto');
    borrar.open('DELETE', 'http://localhost:8080/producto/api/delete/'+ idBorrar, true);
    borrar.send();
}

