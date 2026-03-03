const prompt = require('prompt-sync')()
const pessoas = Number(prompt('pessoas: ')) 
const peixes = Number(prompt('peixes: ')) 
let valorPagar = ''
if (peixes > pessoas) {
    valorPagar = ((peixes - pessoas) * 12) + (pessoas * 20)
    console.log(`o valor a pagar é de R$ ${valorPagar.toFixed(2)}`)
}else {
    valorPagar = (pessoas * 20)
    console.log(`o valor a pagar é R$ ${valorPagar.toFixed(2)}`)
}