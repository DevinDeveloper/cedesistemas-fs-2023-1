// V1 function tradicional
function sumar(numero1, numero2)
{
    return numero1 + numero2;
}

const resultado = sumar(3,7);

// funcion (arrow function)

//Explicito
const sumarFecha1 = (numero1, numero2) => {
    // 
    // 
    // 
    let nombre = "Juan";
    return numero1 + numero2;
}

//Implicito
const sumarFecha2 = (numero1, numero2) => (
    numero1 + numero2
);

const sumarFecha = (numero1, numero2) => numero1 + numero2;
console.log(sumarFecha(1,5));