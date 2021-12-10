function comenzar(){
      
      let entradaarchivo=document.getElementById("entradaarchivo");
      let botonguardar=document.getElementById("guardar");
      
      botonguardar.addEventListener("click",function(){
        
        //Esta parte lee el archivo csv
        const reader=new FileReader();
        reader.onload=function(){//funcion que inicia al cargar el archivo
          const lines=reader.result.split('\n').map(function(line){
            return line.split(',')
          })
          
          //En esta parte se envia a la api rest
          for(i=0;i<lines.length;i++){
            
            fetch('http://localhost:8080/producto/api/cargarCSV', {
                        method: 'POST',
                        body: JSON.stringify({
                          codigo_producto: lines[i][0],
                          ivacompra: lines[i][4],
                          nitproveedor: lines[i][2],
                          nombre_producto: lines[i][1],
                          precio_compra: lines[i][3],
                          precio_venta: lines[i][5]
                        }),
                        headers: {
                            "Content-type": "application/json"
                        }});
            }
        }
        reader.readAsText(entradaarchivo.files[0]);//metodo para leer el archivo
        alert('El archivo se subio correctamente');
    
      },false);
    }
    window.addEventListener("load", comenzar,false);
    
  
