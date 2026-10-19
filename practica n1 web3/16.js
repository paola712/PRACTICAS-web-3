function transformarLista(lista, transformar) {
    const nuevoArreglo = [];
    for (const elemento of lista) {
        nuevoArreglo.push(transformar(elemento));
    }
    return nuevoArreglo;
}
function aplicarImpuesto(precio) {
    return Math.round(precio * 1.15 * 100) / 100;
}
const precios = [100, 200, 50];
const preciosConImpuesto = transformarLista(precios, aplicarImpuesto);
console.log("Precios con impuesto:", preciosConImpuesto);