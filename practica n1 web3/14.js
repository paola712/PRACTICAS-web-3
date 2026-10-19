const libros = [
    { titulo: "Cien anios de soledad", autor:
         "Garcia Marquez", disponible: true },
    { titulo: "Rayuela", autor: "Cortazar", disponible: false },
    { titulo: "El Aleph", autor: "Borges", disponible: true }
];

for (const { titulo, autor, disponible } of libros) {
    if (disponible) {
        console.log(`Disponible: ${titulo} - ${autor}`);
    }
}