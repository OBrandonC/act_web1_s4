function invertirCadena(cadena) {
    if (cadena === "") return "";
    return invertirCadena(cadena.slice(1)) + cadena[0];
}


console.log(invertirCadena("hola")); 
