const calificaciones = [45, 51, 78, 60, 39, 91, 50, 85];

let aprobados = 0;

for (const nota of calificaciones) {
    if (nota >= 51) {
        aprobados++;
    }
}

console.log("Estudiantes aprobados:", aprobados);