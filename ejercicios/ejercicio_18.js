function validarCorreo(email) {
    return email.includes("@") && email.endsWith(".com");
}


console.log(validarCorreo("test@gmail.com")); 
console.log(validarCorreo("test@gmail")); 
