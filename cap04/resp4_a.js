const prompt = require('prompt-sync')()
const numero = Number(prompt('digite um número: '))
if (numero % 2 == 0) {
    console.log('o número é PAR')
}else {
    console.log('o número é ÍMPAR')
}

const numero2 = Number(prompt('digite um número: '))
const parOuImpar = numero2 % 2 == 0 ? console.log('o número é PAR') : console.log('o número é ÍMPAR')