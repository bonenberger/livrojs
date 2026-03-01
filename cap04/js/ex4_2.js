const frm = document.querySelector('form')
const resp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.innome.value
    const masculino = frm.inmas.checked
    const altura = Number(frm.inalt.value)
    let peso

    if (masculino) {
        peso = 22 * Math.pow(altura, 2)
    }else {
        peso = 21 * Math.pow(altura, 2)
    }
    resp.innerHTML = `${nome.toUpperCase()}, seu peso ideal é ${peso.toFixed(3)}`
})