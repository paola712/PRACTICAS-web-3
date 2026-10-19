const preciosUsd = [10, 25, 40];

const preciosBs = preciosUsd.map(precio => precio * 6.96);

console.log("Precios en bolivianos:", preciosBs);