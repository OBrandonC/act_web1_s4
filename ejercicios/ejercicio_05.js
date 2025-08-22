function contarVocales(cadena) {
    if (cadena.length === 0) {
        return 0; 
    }

   
    const primeraLetra = cadena[0].toLowerCase();
    const esVocal = "aeiou".includes(primeraLetra);

   
    return (esVocal ? 1 : 0) + contarVocales(cadena.slice(1));
}


const texto = "Hola Mundo";
console.log(contarVocales(texto)); 
