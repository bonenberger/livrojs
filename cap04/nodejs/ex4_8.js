console.clear()
const prompt = require('prompt-sync')()
const compra = Number(prompt('valor da compra: '))
const aux = Math.floor(compra / 20) 
const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux
const valorParcelas = compra / parcelas
console.log(`a compra pode ser paga em ${parcelas}x de R$ ${valorParcelas.toFixed(2).replace('.', ',')}`)