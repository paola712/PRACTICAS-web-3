const paciente = {
    nombre: "Elena Vargas",
    edad: 34,
    contacto: {
        telefono: "77812345",
        direccion: "Av. Arce #123"
    }
};
const {
    nombre,
    contacto: { telefono, direccion }
} = paciente;
console.log("Paciente:", nombre);
console.log("Telefono:", telefono);
console.log("Direccion:", direccion);