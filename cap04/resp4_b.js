const prompt = require('prompt-sync')()
const max = Number(prompt('velocidade máxima: '))
const medida = Number(prompt('Velocidade medida: '))
let multaLeve = max * 1.2

if (medida <= max) {
    console.log('sem multa')
}else if (medida > max && medida <= multaLeve){
    console.log('multa leve')
}else {
    console.log('multa grave')
}
