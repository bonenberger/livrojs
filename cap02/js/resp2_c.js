const frm = document.querySelector('form')
const resp1 = document.querySelector('#resp1')
const resp2 = document.querySelector('#resp2')

frm.addEventListener('submit', (e) => {
    const produto = frm.inprod.value
    const vunit = Number(frm.inpreco.value)
    const unipromo = vunit / 2
    const tpromo = vunit * 2 + unipromo
    resp1.innerHTML = `Promoção de ${produto}: leve 3 por R$ ${tpromo.toFixed(2).replace('.', ',')}`
    resp2.innerHTML = `o terceiro produto custa apenas R$ ${unipromo.toFixed(2).replace('.', ',')}`
    e.preventDefault()
})