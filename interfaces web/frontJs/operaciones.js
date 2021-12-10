/**
 * Funcion que crea los eventos necesarios
 */

const setEvents = () => {
    document.querySelectorAll("input").forEach(el => {
        el.removeEventListener("keyup", calcularFila);
        el.addEventListener("keyup", calcularFila);
    });
};
setEvents();
 
/**
 * Funcion para calcular el subtotal de la fila
 * Se ejecuta cada vez que se modifica un input
 */
function calcularFila() {
    const tr=this.closest("tr")
    const num=tr.querySelectorAll("input[type=number]");
    tr.querySelector(".subtotal").innerText=(parseFloat(num[1].value)*parseFloat(num[2].value) || 0).toFixed(2);
 
    calcularTotal();
    agregarFila();
}
 
/**
 * Funcion que calcula el total
 */
function calcularTotal() {
    const suma=[...document.querySelectorAll(".subtotal")].reduce((acum, el) => acum+parseFloat(el.innerText), 0);
    document.querySelector(".base").innerText=suma.toFixed(2);
    document.querySelector(".iva").innerText=(suma*.19).toFixed(2);
    document.querySelector(".total").innerText=((suma*.19)+suma).toFixed(2);
}
 


