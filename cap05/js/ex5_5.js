const frm = document.querySelector('form')
const res1 = document.querySelector('#outresp1')
const res2 = document.querySelector('#outresp2')

let resposta = ''
let numContas = 0
let valorTotal = 0

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const descricao = frm.inconta.value
    const valor = Number(frm.invalor.value)
    numContas++
    valorTotal = valorTotal + valor
    resposta = resposta + descricao + ' - R$' + valor.toFixed(2) + '\n'
    res1.innerHTML = `${resposta}-----------------------------`
    res2.innerHTML = `${numContas} Conta(s) - Total R$: ${valorTotal.toFixed(2)}`

    frm.inconta.value = ''
    frm.invalor.value = ''
    frm.inconta.focus() // posiciona no campo inconta do form
})