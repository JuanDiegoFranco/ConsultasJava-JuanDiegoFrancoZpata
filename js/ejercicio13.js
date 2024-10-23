let nota1 = parseInt(prompt("Digite la primera nota:"));
let nota2 = parseInt(prompt("Digite la segunda nota:"));
let nota3 = parseInt(prompt("Digite la tercera nota:"));

let promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 3.0) {
    console.log("Aprobaste la materia con un promedio de: " + promedio);
} else {
    console.log("Reprobaste la materia con un promedio de: " + promedio);
}
