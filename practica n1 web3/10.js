function calcularArea(base, altura, formula) {
    return formula(base, altura);
function formulaTriangulo(base, altura) {
    return (base * altura) / 2;
}

function formulaRectangulo(base, altura) {
    return base * altura;
}

console.log("Area del triangulo:", 
    calcularArea(8, 5, formulaTriangulo));
console.log("Area del rectangulo:", 
    calcularArea(8, 5, formulaRectangulo));