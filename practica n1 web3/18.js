const correos = ["ana@mail.com", "luis@mail.com", "vera@mail.com"];

for (let i = 0; i < correos.length; i++) {
    setTimeout(() => {
        console.log(
            `(segundo ${i + 1}) Recordatorio enviado a ${correos[i]}`
        );
    }, (i + 1) * 1000);
}