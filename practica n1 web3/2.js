const temperaturas = [22, 24, 27, 30, 29, 26, 23, 21];
let suma = 0;
for (const temperatura of temperaturas) {
    suma += temperatura;
}
const promedio = suma / temperaturas.length;
console.log("Temperatura promedio:", promedio + "°C");
if (promedio > 25) {
    console.log("Clasificación del día: caluroso");
} else {
    console.log("Clasificación del día: templado");
}