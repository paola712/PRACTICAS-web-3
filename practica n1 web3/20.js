const inscripciones = [
    { curso: "JavaScript Básico", costo: 350, esBecado: false },
    { curso: "Bases de Datos", costo: 400, esBecado: true },
    { curso: "Redes", costo: 300, esBecado: true }
];
const montosFinales = inscripciones.map(({ costo, esBecado }) => {
    return esBecado ? costo * 0.75 : costo;
});
console.log("Montos finales:", montosFinales);
const total = montosFinales.reduce((suma, monto) => suma + monto, 0);
console.log("Total a recaudar:", total, "Bs.");
function confirmarInscripciones(montoTotal, callback) {
    setTimeout(() => {
        callback(montoTotal);
    }, 2000);
}
confirmarInscripciones(total, (monto) => {
    console.log(
        `Procesamiento de pago finalizado. Total recaudado: ${monto} Bs.`
    );
});