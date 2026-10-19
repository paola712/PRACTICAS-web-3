const empleados = [
    { nombre: "Rosa", salario: 3200 },
    { nombre: "Hugo", salario: 4100 },
    { nombre: "Ines", salario: 2900 }
];

let total = 0;

for (const empleado of empleados) {
    total += empleado.salario;
}

console.log("Total de planilla:", total, "Bs.");