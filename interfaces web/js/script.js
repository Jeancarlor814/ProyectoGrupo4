function Login(){ 
var done=0; 
var email=document.login.email.value; 
var password=document.login.password.value; 
if (email=="admininicial" && password=="admin123456"){ 
    window.location="menuprincipal.html";
}
else{ 
    alert("¡Por favor ingrese usuario y contraseña correctos!");
	window.location="index.html";
	
}
}
 

 

