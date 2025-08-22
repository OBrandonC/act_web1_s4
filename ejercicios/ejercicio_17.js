function operar(a, b, operacion) {
    return operacion(a, b);
}


const suma = (x, y) => x + y;
console.log(operar(5, 3, suma)); 
