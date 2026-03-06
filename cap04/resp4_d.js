const prompt = require('prompt-sync')()
const a = Number(prompt('lado a: '))
const b = Number(prompt('lado b: '))
const c = Number(prompt('lado c: '))
let tipo

if (a + b <= c || a + c <= b || b + c <= a) {
    tipo = 'as medidas não formam um triângulo'
}else if (a == b && a == c && b == c) {
    tipo = 'o triângulo é equilátero'
}else if ((a === b && a !== c) || (a === c && a !== b) || (b === c && b !== a)) {
    tipo = 'o triângulo é isosceles'
}else {
    tipo = 'o triângulo é escaleno'
}
console.log(tipo)