const prompt = require('prompt-sync')()

const alunos =  []

do {
   const nome = prompt('nome: ')
   if (nome == 'fim') {
    break
   }
   const nota = Number(prompt('nota: '))
   alunos.push({nome, nota})
   console.log('aluno cadastrado')
}while(true)
console.log('-'.repeat(40))
const maior = alunos.reduce((a,b) => Math.max(a,b.nota), 0)
console.log(`maior nota ${maior}`)

if (maior >= 7) {
    const destaques = alunos.filter(aluno => aluno.nota == maior)
    for (const destaque of destaques) {
        console.log(`- ${destaque.nome}`)
    }
}else {
    console.log('não há alunos destaque na turma')
}
