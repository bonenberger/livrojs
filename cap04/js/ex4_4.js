const frm = document.querySelector('form')
const rsp = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const bra = Number(frm.inbrasil.value)
    let fra = bra + 5
    if (fra > 24) {
        fra = fra - 24
    }
    rsp.innerHTML = `hora na frança: ${fra.toFixed(2).replace('.', ':')}`
})