const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    const valor = Number(frm.inpreco.value)
    const tempo = Number(frm.intempo.value)
    const utilizado = Math.ceil(tempo / 15)
    const pagar = utilizado * valor 
    resp.innerHTML = `valor a pagar é R$ ${pagar.toFixed(2).replace('.', ',')}`
    e.preventDefault()
})