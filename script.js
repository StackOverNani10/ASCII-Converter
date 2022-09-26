function Convertir(){
    var caracter = document.getElementById("txtCaracter").value;
    var ascii_code = caracter.codePointAt(0); //resultado: codigo ASCII
    var char = String.fromCharCode(caracter); //resultado: caracter
    var mostrador = document.getElementById("txtResult"); 
    var opcion = document.getElementById("btnToASCII");
    console.log(caracter + ": " + ascii_code);

    if (caracter == '') 
        return false;
    else
        if (opcion.checked)
            mostrador.value = ascii_code; 
        else
            mostrador.value = char;  
}