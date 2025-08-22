function multiplicarArreglo(arr) {
    return arr.reduce((acumulador, numero) => acumulador * numero, 1);
}


console.log(multiplicarArreglo([1, 2, 3, 4])); 
