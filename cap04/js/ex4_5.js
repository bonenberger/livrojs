const frm = document.querySelector('form')
const rsp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.innumero.value)
    const raiz = Math.sqrt(num, 2)
    if (num % raiz == 0) {
        rsp.innerHTML = `a raiz quadrada de ${num} é ${raiz}`
    }else {
        rsp.innerHTML = `o número solicitado não possui raiz exata`
    }
    
})