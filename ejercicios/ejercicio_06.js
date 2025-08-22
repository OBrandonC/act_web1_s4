function filtrarMayoresA10(arr) {
    return arr.filter(function(numero) {
        return numero > 10;
    });
}


const numeros = [4, 11, 7, 25, 10, 15];
console.log(filtrarMayoresA10(numeros)); 
