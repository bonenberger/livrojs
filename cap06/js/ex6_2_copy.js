const form = document.querySelector('form')
const respErros = document.querySelector('#outerros')
const respChances = document.querySelector('#outchances')
const respDicas = document.querySelector('#outdicas')
const erros = []
let chances 
const sorteado = Math.floor(Math.random()*100)+1

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const numero = Number(form.innumero.value)
    chances = Number(form.inchances.value)
    if (numero == sorteado){
        alert('Parabéns, você acertou!')
    }else {
        if (erros.includes(numero)){
            alert(`você já apostou no número ${numero}. tente novamente`)
        }else {
            erros.push(numero)
            const numErros = erros.length
            const tentativas = chances - numErros
            const dica = numero > sorteado ? 'menor' : 'maior'
            respErros.innerHTML = `${numErros}: ${erros.join(';')}`
            respChances.innerHTML = tentativas
            respDicas.innerHTML = `o número sorteado é ${dica} do que você apostou`
            if (tentativas == 0){
                    alert(`game over! o número sorteado era ${sorteado}`)
                    form.btapostar.disabled = true
                    form.btnovo.className = 'exibe'
            }
        }
        
    }
    form.innumero.value = ''
    form.innumero.focus()
})

form.btnovo.addEventListener('click', () =>{
    location.reload()
})
