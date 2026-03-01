const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    
    const nomeAluno = frm.inaluno.value
    const nota1 = Number(frm.innota1.value)
    const nota2 = Number(frm.innota2.value)
    const media = (nota1 + nota2) / 2
    if (media >= 7) {
        resp1.innerHTML = `Média das notas: ${media}`
        resp2.innerHTML = `Parabéns, ${nomeAluno.toUpperCase()}! Você foi aprovado!`
        resp2.style.color = 'blue'
    }else if (media >= 5) {
        resp1.innerHTML = `Média das notas: ${media}`
        resp2.innerHTML = `Atenção, ${nomeAluno.toUpperCase()}! Você ficou em recuperação`
        resp2.style.color = 'orange'
    }else {
        resp1.innerHTML = `Média das notas: ${media}`
        resp2.innerHTML = `${nomeAluno.toUpperCase()}, infelizmente você foi reprovado.`
        resp2.style.color = 'red'
    }
    e.preventDefault()
})