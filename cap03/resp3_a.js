const prompt = require('prompt-sync')()
const salario = Number(prompt('salário: '))
const tempo = Number(prompt('tempo de empresa: '))
const quadri = Math.floor(tempo / 4)
//const novoSalario = salario * (quadri/100 + 1)
const acrescimo = salario * quadri/100
console.log(`o funcionários tem ${quadri} quadriênios e passará a receber R$ ${(salario + acrescimo).toFixed(2).replace('.', ',')}`)