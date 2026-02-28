const frm = document.querySelector('form')
const res1 = document.querySelector('#resp1')
const res2 = document.querySelector('#resp2')

frm.addEventListener('submit', (e) => {
    const preco = Number(frm.inPreco.value)
    const desconto = Math.floor(preco) * 2
    res1.innerHTML = `promoção de ${frm.inMedic.value}`
    res2.innerHTML = `leve dois por apenas R$ ${desconto.toFixed(2).replace(".", ",")}`
    e.preventDefault()
})