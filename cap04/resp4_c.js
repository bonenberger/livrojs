const prompt = require('prompt-sync')()
const valorPago = Number(prompt('Valor pago R$: '))
let troco
if (valorPago < 1) {
    console.log('valor insuficiente')
}else if(valorPago >= 1 && valorPago < 1.75) {
    troco = valorPago - 1
    console.log(`tempo: 30min`)
    console.log(`troco: R$ ${troco.toFixed(2)}`)
}else if (valorPago >= 1.75 && valorPago < 3) {
    troco = valorPago - 1.75
    console.log(`tempo: 60min`)
    console.log(`troco: R$ ${troco.toFixed(2)}`)
}else {
    troco = valorPago - 3
    console.log('tempo: 120min')
    console.log(`troco: R$ ${troco.toFixed(2)}`)
}

//versão chatGPT
const valorPago2 = Number(prompt('Valor pago R$: '))
let troco2
let tempo

if (valorPago < 1) {
    console.log('Valor insuficiente')
} else if (valorPago < 1.75) {
    tempo = 30
    troco2 = valorPago - 1
} else if (valorPago < 3) {
    tempo = 60
    troco2 = valorPago - 1.75
} else {
    tempo = 120
    troco2 = valorPago - 3
}

if (valorPago >= 1) {
    console.log(`Tempo: ${tempo} min`)
    console.log(`Troco: R$ ${troco2.toFixed(2)}`)
}