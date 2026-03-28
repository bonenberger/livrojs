const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const lista = []

frm.addEventListener('submit' , (e) => {
    e.preventDefault()
    const nome = frm.innome.value
    const acertos = Number(frm.inacertos.value)
    lista.push({nome,acertos})
    frm.innome.value = ''
    frm.inacertos.value = ''
    frm.innome.focus()
    console.log(lista)
    
})

frm.btListar.addEventListener('click', () =>{
    let exibir = ''
    for (aluno of lista) {
        const {nome, acertos} = aluno
        exibir += `${nome}: ${acertos} acertos.\n`
        console.log(exibir)
    }
    resp.innerHTML = exibir
})

frm.btAprovados.addEventListener('click', () => {
    if (lista.length == 0) {
        alert('a lista está vazia.')
        return
    }
    const minAcert = Number(prompt('qual a quantidade de acertos para a aprovação? '))
    console.log(minAcert)
    
    const a = lista.filter(lista => lista.acertos >= minAcert)
    console.log(a)
    let aprovados = ''
    for (let candidato of a) {
        const {nome, acertos} = candidato
        aprovados += `nome: ${nome} = ${acertos} acertos.\n`
    }

    const emOrdem = [... a].sort((a, b) => b.acertos - a.acertos)
    let classificacaoFinal = ''
    for (let colocados of emOrdem) {
        let {nome, acertos} = colocados
        classificacaoFinal += `Nome: ${nome} = ${acertos} acertos.\n`

    }
    resp.innerHTML = classificacaoFinal
})