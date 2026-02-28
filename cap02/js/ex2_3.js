//criar referência ao formulário e as saídas
const frm = document.querySelector('form')
const nomeVeiculo = document.querySelector('#outResp1')
const entrada = document.querySelector('#outResp2')
const parcelas = document.querySelector('#outResp3')

//criar evento de escuta

frm.addEventListener('submit', (e) => {
    const valorTotal = Number(frm.inPreco.value)
    const noAto = valorTotal / 2
    const parc = (valorTotal - noAto) / 12

    nomeVeiculo.innerHTML = frm.inVeiculo.value
    entrada.innerHTML = `entrada de R$ ${noAto.toFixed(2)}`
    parcelas.innerHTML = `12x de R$ ${parc.toFixed(2)}`

    e.preventDefault()
})