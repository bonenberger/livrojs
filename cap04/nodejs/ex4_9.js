const prompt = require('prompt-sync')()
const numero = Number(prompt('digite um número: '))
if (numero < 100 || numero > 1000) {
    console.log('erro! o número deve estar na casa das centenas.')
    return
}else {
    const num1 = Math.floor(numero / 100)
    sobra = numero % 100
    const num2 = Math.floor(sobra / 10)
    const num3 = sobra % 10
        console.log(`o número ${numero} invertido fica ${num3}${num2}${num1}`)
}