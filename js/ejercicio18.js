let numeroIngresado = parseFloat(prompt("Digite un número:"));

if (numeroIngresado > 0) {
    console.log(numeroIngresado + " es positivo.");
} else if (numeroIngresado < 0) {
    console.log(numeroIngresado + " es negativo.");
} else {
    console.log("El número es cero.");
}
