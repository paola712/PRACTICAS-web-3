const votos = ["Ana", "Luis", "Ana", "Marco", "Ana", "Luis"];

const resultados = {};

for (const voto of votos) {
    if (resultados[voto]) {
        resultados[voto]++;
    } else {
        resultados[voto] = 1;
    }
}

console.log("Resultados:", resultados);