const carros = []
carros.push({modelo:'sandeiro', preco: 46500, marca: 'renault'})
carros.push({modelo: 'palio', preco: 37800, marca: 'fiat'})
carros.push({modelo: 'onix', preco: 89900, marca: 'chevrolet'})
/*
for (const carro of carros) {
    console.log(`${carro.modelo} (${carro.marca}) - R$ ${carro.preco.toFixed(2).replace('.', ',')}`)
}

for (const carro of carros){
    const {modelo, preco, marca} = carro // desestrutura objeto carro em modelo e preço
    console.log(`${modelo.toUpperCase()} (${marca.toUpperCase()}) - R$ ${preco.toFixed(2).replace('.', ',')}`)
}

const pacientes = ['ana', 'carlos', 'joao', 'sofia']
const [atender, proximo, ...outros] = pacientes
console.log(atender)
console.log(proximo)
console.log(outros)


const carro = {modelo: 'corsa', preco: 59500}
const carro2 = {...carro, ano: 2020}
console.log(carro)


let pacientes = ['joao', 'sofia']
//pacientes = ['ana', ...pacientes]
//pacientes = [...pacientes, 'maria']
pacientes = ['ana', ...pacientes, 'mario']
console.log(pacientes)
const pacientes2 = [...pacientes]
console.log(pacientes2)

const idades = [12, 16, 15, 17, 14]

for (const idade of idades) {
    if (idade >= 18) {
        console.log(idade)
    }
}

const idades = [12, 18, 15, 17, 14]
let maiores = false
for (const idade of idades){
    if (idade >= 18) {
        console.log(idade)
        maiores = true
    }
}
if (!maiores) {
    console.log('não há idades maiores que 18 na lista')
}


// MAP

const numeros = [10, 13, 20, 8, 15]
const dobros = numeros.map(num => num * 2)

console.log(dobros.join(","))

const amigos = [
    {nome: 'ana', idade: 20},
    {nome: 'bruno', idade: 17},
    {nome: 'cátia', idade: 25}
]
const amigos2 = amigos.map(aux => ({nome: aux.nome, nasc: 2022 - aux.idade}))

for (const amigo of amigos2) {
    console.log(`${amigo.nome.toLocaleUpperCase()} - Nasceu em: ${amigo.nasc}`)
}
// REDUCE

const amigos = [
    {nome: 'ana', idade: 20},
    {nome: 'bruno', idade: 17},
    {nome: 'cátia', idade: 25}
]

const soma = amigos.reduce((acumulador, amigo) => acumulador + amigo.idade, 0)
const todos = amigos.reduce((acumulador, amigo) => acumulador + amigo.nome + ' ', "")

console.log(`soma: ${soma}`)
console.log(`todos: ${todos}`)
*/

