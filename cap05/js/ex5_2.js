const frm = document.querySelector('form')
const rsp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    let resposta = ''
    const numero = Number(frm.innumero.value)
    for(let i = numero; i > 0; i--) {
        resposta = numero - (numero - i) + ' '
        rsp.innerHTML += resposta
    }
})