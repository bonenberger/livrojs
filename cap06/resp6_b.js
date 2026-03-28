const prompt = require('prompt-sync')()
const clientes = []

console.log('informe os clientes em ordem de chegada ou digite fim para sair')

do {
    const nome = prompt('nome: ')
    if (nome == 'fim') {
        break
    }
    const idade = prompt('idade: ')
    console.log('cliente adicionado com sucesso')
    clientes.push({nome, idade})
}while (true)


console.log('\nFila Preferencial')
console.log('-'.repeat(40))
const preferencial = clientes.filter(cliente => cliente.idade > 59)
preferencial.forEach((fila, i) => {
    console.log(`${i+1}. ${fila.nome}`)
})
console.log('\nFila Normal')
console.log('-'.repeat(40))

const normal = clientes.filter(cliente => cliente.idade < 60)
normal.forEach((fila, i) =>{
    console.log(`${i+1}. ${fila.nome}`)
})