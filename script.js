var codigoDesencriptado = ["a","e","i","o","u"];
var codigoEncriptado = ["ai", "enter", "imes", "ober", "ufat"];
var botonEncriptar = document.querySelector("#btn-encriptar");
var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonEncriptar.addEventListener("click", function(){
    event.preventDefault();
    var mensaje = encriptarDesencriptar(codigoDesencriptado,codigoEncriptado);
    document.getElementById('msg').value = mensaje;
});
botonDesencriptar.addEventListener("click", function(){
    event.preventDefault();
    var mensaje = encriptarDesencriptar(codigoEncriptado,codigoDesencriptado);
    document.getElementById('msg').value = mensaje;
});

function copiarMensaje(){
    var copiarMsj = document.querySelector("#msg");
    copiarMsj.select();
    document.execCommand("copy");
}
document.querySelector("#btn-copy").addEventListener("click", copiarMensaje);





