let ventasTotales = 50;
let ventasMenor2000 = 0;
let ventasMayorIgual2000 = 0;
let comisionTotal = 0;

for (let i = 1; i <= ventasTotales; i++) {
    let precio = parseFloat(prompt("Digite el precio del artículo " + i + ":"));

    if (precio < 2000) {
        ventasMenor2000++;
        comisionTotal += precio * 0.03;
    } else {
        ventasMayorIgual2000++;
        comisionTotal += precio * 0.05;
    }
}

console.log("Total de comisiones: $" + comisionTotal.toFixed(2));
console.log("Ventas menores a $2000: " + ventasMenor2000);
console.log("Ventas mayores o iguales a $2000: " + ventasMayorIgual2000);
