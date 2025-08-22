const promedio = arr => arr.reduce((acum, num) => acum + num, 0) / arr.length;


console.log(promedio([5, 10, 15])); 
