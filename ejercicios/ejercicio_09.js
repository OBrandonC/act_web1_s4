const contador = (function() {
    let cuenta = 0;
    return function() {
        cuenta++;
        return cuenta;
    };
})();


console.log(contador()); 
console.log(contador()); 
console.log(contador()); 
