const prompt = require('prompt-sync')()
const numero = prompt('digite um número: ')
let soma = 0
let divisores = []

for(let i = 1; i < numero; i++) {
    if (numero % i == 0) {
        soma += i
        divisores += `${i} `
    }
}


console.log(`divisores de ${numero}: ${divisores}. Soma: ${soma}`)

if (numero == soma) {
    console.log(`${numero} é um número perfeito`)
}else {
    console.log(`${numero} não é um número perfeito`)
}
