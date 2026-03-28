const frm = document.querySelector('form')
const listagem = document.querySelector('h2')
const verificacao = document.querySelector('h3')
const listaNum = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.innumeros.value)
    if (listaNum.includes(numero) == true) {
        alert('o número já está na lista')
        frm.innumeros.value = ''
        frm.innumeros.focus()
        return
    }
    listaNum.push(numero)
    frm.innumeros.value = ''
    frm.innumeros.focus()
    listagem.innerHTML = `números: ` + listaNum.join(' - ')
})

frm.btVerificar.addEventListener("click", () => {
    if (listaNum.length == 0) {
        alert('a lista está vazia.')
        return
    }
    let ordem = true
    for (let i = 0; i < listaNum.length - 1; i++) {
        if (listaNum[i] > listaNum[i + 1]) {
            ordem = false
            break
        }
    }

    verificacao.innerText = ordem ? 'os números estão em ordem' : 'os números não estão em ordem'
})