const prompt = require('prompt-sync')()
const fruta = prompt('fruta: ')
const numero = Number(prompt('número: '))
const separador = '*'
let resposta = ''
for (let i = 1; i <= numero; i++) {
    if (i < numero) {
        resposta += `${fruta}*`
    }else {
        resposta += `${fruta}`
    }
}
console.log(resposta)
