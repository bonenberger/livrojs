const prompt = require('prompt-sync')()
const pesoKg = Number(prompt('Peso da ração (kg): '))
const consumo = Number(prompt('consumo diário (g): '))
const pesoGr = pesoKg * 1000
const dias = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo

console.log(`Duração: ${dias} dias\nSobra: ${sobra} g`)
//console.log(dias)