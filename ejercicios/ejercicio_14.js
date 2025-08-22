
const generarID = (function() {
    let contador = 0;
    return function() {
        contador++;
        return "ID_" + contador;
    };
})();

console.log(generarID());
console.log(generarID()); 
