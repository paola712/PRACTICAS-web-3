const empleados = [
    { codigo: 101, nombre: "Marco", antiguedad: 12 },
    { codigo: 105, nombre: "Sofia", antiguedad: 6 },
    { codigo: 110, nombre: "Raul", antiguedad: 15 }
];
let encontrado = false;
let empleadosAntiguos = 0;
for (const empleado of empleados) {
    if (empleado.codigo === 105) {
        console.log(`Empleado encontrado: ${empleado.nombre} (código ${empleado.codigo})`);
        console.log("Antigüedad:", empleado.antiguedad, "años");
        encontrado = true;
    }
    if (empleado.antiguedad > 10) {
        empleadosAntiguos++;
    }
}
if (!encontrado) {
    console.log("Empleado con código 105 no encontrado");
}
console.log("Empleados con más de 10 años de antigüedad:", empleadosAntiguos);