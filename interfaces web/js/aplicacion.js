var usuario = document.getElementsByName("usuario")
var contraseña = document.getElementsByName("contraseña")
var error = document.getElementById("error")
error.style.color="red";
function enviarformularios(){
    var mensajesdeerror= [];
    if(document.form.usuario.value=="admininicial" && document.form.contraseña.value=="admin123456"){
        window.location="file:///C:/Users/jcrod/Desktop/interfaces%20web/menuprincipal.html"
        
      }
      else{
       mensajesdeerror.push("usuario y/o contraseña incorrectos. Intente nuevamente")
      }
  
    

error.innerHTML= mensajesdeerror.join(",")
return false;
}