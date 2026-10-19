const promedios = [78, 92, 88, 95, 60, 90, 84];

const becados = promedios.filter(promedio => promedio >= 90);

console.log("Estudiantes becados:", becados);