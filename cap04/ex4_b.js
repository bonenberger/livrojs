const prompt = require('prompt-sync')()
const max = Number(prompt('velocidade máxima: '))
const medida = Number(prompt('Velocidade medida: '))
console.log(`máxima da via = ${max}km/h\nvelocidade medida = ${medida}km/h`)