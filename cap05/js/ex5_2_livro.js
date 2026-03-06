const frm = document.querySelector('form')
const rsp = document.querySelector('h3')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.innumero.value)
    let resposta = `entre ${numero} e 1: `    
    for(let i = numero; i > 0; i--) {
        resposta = resposta + i + " "
    }
    rsp.innerHTML = resposta
})