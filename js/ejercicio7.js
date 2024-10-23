function Persona() {
    let nombre = prompt("Introduce el nombre:");
    let edad = parseInt(prompt("Introduce la edad:"));
    let sexo = prompt("Introduce el sexo (M/F):");
    let estadoC = prompt("Introduce el estado civil (soltero/casado):");

    if ((sexo === 'M' && estadoC === 'casado' && edad > 40) || 
        (sexo === 'F' && estadoC === 'soltero' && edad < 50)) {
        console.log(`Nombre: ${nombre}`);
    } else {
        console.log("No cumple los requisitos.");
    }
}
persona();
