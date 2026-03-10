const prompt = require('prompt-sync')()
const inicio = Number(prompt('nº de chinchilas: '))
if (inicio < 2) {
    console.log('digite um número maior que 2.')
}
const anos = Number(prompt('anos: '))
let chinchilas = inicio

if (anos == 1) {
    console.log(`${anos}º ano: ${chinchilas}`)
}

for (let i = 1; i <= anos; i++) {
    chinchilas *=3
    console.log(`${i}º ano: ${chinchilas} chinchilas`)
}

console.log(inicio)
console.log(anos)