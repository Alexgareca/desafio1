function encriptarDesencriptar(regla1,regla2){
    var mensaje = document.querySelector("#input-texto").value;
    var texto = "";
    var guardarPalabra = "";
    var desencriptado = false;
    var noRepetirLetras = false;
    var guardarPosicion = 0;
    var mensajeValido = /^[a-z\s]+$/;
    if(mensajeValido.test(mensaje)){
        for(var i = 0; i < mensaje.length; i++){
            for(var j = 0; j < regla1.length; j++){
                if(mensaje[i] == regla1[j]){
                    texto += regla2[j];
                    noRepetirLetras = true;
                    break;
                }
                else if((mensaje[i] == regla2[j]) && !desencriptado){
                    guardarPosicion = j;
                    guardarPalabra += mensaje[i];
                    desencriptado = true;
                    noRepetirLetras = true;
                    break;
                }
                else if(desencriptado){
                    guardarPalabra += mensaje[i];
                    noRepetirLetras = true;
                    if(guardarPalabra == regla1[guardarPosicion]){
                        texto += regla2[guardarPosicion];
                        guardarPalabra = "";
                        desencriptado = false;
                        break;
                    }
                    break;
                }
            }
            if (!noRepetirLetras){
                texto += mensaje[i];
            }
            noRepetirLetras = false;
        }
        return texto;
    }
    else{
        alert ("Los datos no son validos");
        document.querySelector("#input-texto").value = "";
        document.querySelector("#input-texto").focus(); 
    }
}
