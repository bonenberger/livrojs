const frm = document.querySelector('form')
const respErros = document.querySelector('#outerros')
const respChances = document.querySelector('#outchances')
const respDicas = document.querySelector('#outdica')

const erros = []
const sorteado = Math.floor(Math.random()*100)+1
const CHANCES = 6

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(frm.innumero.value)
    if (numero == sorteado) {
        respDicas.innerHTML = `Parabéns! Número sorteado: ${sorteado}`
        frm.btapostar.disabled = true
        frm.btnovo.className = 'exibe'
    }else {
        if (erros.includes(numero)) {
            alert(`você já apostou o número ${numero}. tente outro...`)
        }else {
            erros.push(numero)
            const numErros = erros.length
            const numChances = CHANCES - numErros
            respErros.innerHTML = `${numErros} ${erros.join(';')}`
            respChances.innerText = numChances
        
            if (numChances == 0) {
                alert('Suas chances acabaram!')
                frm.btapostar.disabled = true
                frm.btnovo.className = 'exibe'
                respDicas.innerHTML = `game over! Número sorteado: ${sorteado}`
            }else {
                const dica = numero < sorteado ? 'maior' : 'menor'
                respDicas.innerHTML = `tente um número ${dica} que ${numero}`
            }  
        }  
    }
    frm.innumero.value = ''
    frm.innumero.focus()
})

frm.btnovo.addEventListener('click', () => {
    location.reload()
})