//push() = adiciona um elemento ao final do vetor
//unshift() = adiciona um elemento ao início do vetor e move os demais
//pop() = remove o último elemento do vetor
//shift() = remove o primeiro elemento e move os demais
const cidades = ['pelotas']
cidades.push('são lourenço')
console.log(cidades)

cidades.unshift('porto alegre')
console.log(cidades)

const ultima = cidades.pop()
console.log(ultima)

const primeira = cidades.shift()
console.log(primeira)

console.log('-'.repeat(50))

const letras = ['a', 'b', 'c', 'd'] //declara e define o conteúdo
const letras2 = letras.slice(-2) //obtém as duas últimas letras
const letras3 = letras.slice(0, -1) //obtém do ínicio até o final exceto a última

console.log(letras)
console.log(letras2)
console.log(letras3)

const retira = letras.splice(2,1) //remove a partir da posição 2, 1 elemento
console.log(letras)
console.log(retira)

console.log('-'.repeat(50))

const municipios = ['pelotas', 'são lourenço', 'porto alegre']
for (let i = 0; i < municipios.length; i++) {
    console.log(municipios[i])
}

console.log('-'.repeat(40))
console.log(municipios.toString())
console.log(municipios.join(' - '))

for (const municipio of municipios) {
    console.log(municipio)
}

console.log('-'.repeat(50))

municipios.forEach((municipio, i) => {
    console.log(`${i+1}ª cidade: ${municipio}`)
})