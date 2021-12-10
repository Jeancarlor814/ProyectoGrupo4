window.addEventListener("load", inic,false);

function inic(){
    ini = document.querySelector('#btnlistar');
    ini.addEventListener('click',traertabla);

}

function traertabla(){

    console.log('me diste click');
    const xhttp = new XMLHttpRequest();
    
    xhttp.open('GET', 'http://localhost:8083/ventas/api/all', true)

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let res = document.querySelector('#res');
        

            for(let item of datos){
                res.innerHTML += `
                <tr>
                    <td>${item.cedula_cliente}</td>
                    <td>${item.nombre_cliente}</td>
                    <td>${item.totalventa}</td>
                </tr>
               `
            }
        }
    }
}