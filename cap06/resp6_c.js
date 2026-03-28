const prompt = require('prompt-sync')()
console.log('insira o valor do saque ou digite 0 para sair.')
const saques = []
do {
    const valor = Number(prompt('Saque R$: '))
    if (valor == 0){
        break
    }
    saques.push(valor)
    if (valor % 10 == 0){
        console.log('saque realizado com sucesso')
    }else {
        console.log('valor inválido(deve ser múltiplo de 10)')
    }
}while (true)
console.log('\nSaques Válidos')
console.log('-'.repeat(40))
const saqVal = saques.filter(saque => saque % 10 == 0)
for (const saque of saqVal) {
    console.log(saque.toFixed(2))
}
console.log("\nSaques Inválidos")
console.log("-".repeat(40))

const saqInv = saques.filter(inv => inv % 10 !== 0)
for (const i of saqInv) {
    console.log(i.toFixed(2))
}

console.log("\nTotal Sacado")
console.log("-".repeat(40))

const totSaq = saqVal.reduce((total, saque) => total + saque, 0)
console.log(`total de saques: R$ ${totSaq.toFixed(2).replace('.', ',')}`)