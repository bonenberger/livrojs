const frm = document.querySelector('form')
const rsp1 = document.querySelector('h2')
const rsp2 = document.querySelector('h3')
const rsp3 = document.querySelector('h4')

//notas de 100, 50 e 10

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const saque = Number(frm.invalor.value)
    if (saque % 10 != 0) {
        window.alert = `valor inválido para notas disponíveis (R$ 10, 50 e 100)`
        return
    }
    
    let notasCem = Math.floor(saque / 100)
    let resto = saque % 100
    let notasCinq = Math.floor(resto / 50)
    resto = resto % 50
    let notasDez = resto / 10
    if (notasCem > 0) {
        rsp1.innerHTML = `notas 100 = ${notasCem}`
    }
    if (notasCinq > 0) {
        rsp2.innerHTML = `notas 50 = ${notasCinq}`
    }
    if (notasDez > 0) {
        rsp3.innerHTML = `notas 10 = ${notasDez}`
    }

})