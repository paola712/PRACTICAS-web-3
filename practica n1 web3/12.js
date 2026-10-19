let contador = 0;

const semaforo = setInterval(() => {
    if (contador % 2 === 0) {
        console.log("Cruce habilitado");
    } else {
        console.log("Espere, por favor");
    }

    contador++;

    if (contador === 6) {
        clearInterval(semaforo);
        console.log("Semaforo detenido");
    }
}, 2000);