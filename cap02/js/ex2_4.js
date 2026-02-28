const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    const precoKg = Number(frm.inPreco.value)
    const peso = Number(frm.inConsumo.value)
    const precoPagar = precoKg * peso / 1000

    resp.innerHTML = `Valor a pagar: R$ ${precoPagar.toFixed(2)}`
    e.preventDefault()
})