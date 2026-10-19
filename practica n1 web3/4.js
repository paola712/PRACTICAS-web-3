const vehiculo = {
    marca: "Toyota",
    modelo: "Hilux",
    anio: 2023,
    precio: 18500
};
console.log(`Vehículo: ${vehiculo.marca} ${vehiculo.modelo} 
    (${vehiculo.anio})`);
console.log("Precio: $" + vehiculo.precio);

if (vehiculo.precio > 15000) {
    console.log("Categoría: gama alta");
} else {
    console.log("Categoría: gama normal");
}