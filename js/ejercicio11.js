let longitud = parseFloat(prompt("Digite la longitud de la varilla:"));
let diametro = parseFloat(prompt("Digite el diámetro de la varilla:"));

let densidad = 3.5;
let masa = diametro * longitud * densidad;

if (longitud > 7.5 && longitud <= 9 && diametro >= 0.5 && diametro <= 1.3 && masa <= 5.8) {
    console.log("La varilla es aceptada.");
} else {
    console.log("La varilla es rechazada.");
}
