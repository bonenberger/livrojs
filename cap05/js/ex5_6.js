const frm = document.querySelector('form')
const res = document.querySelector('h2')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.innumero.value)
    let numDivisores = 0
    for (let i = 1; i <= num; i++){
        if (num % i == 0){
            numDivisores++
        }
    }
    if (numDivisores == 2) {
        res.innerHTML = `${num} - é primo`
    }else {
        res.innerHTML = `${num} - NÃO é primo`
    }
})