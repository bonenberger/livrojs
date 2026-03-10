const frm = document.querySelector('form')
const res = document.querySelector('h2#outEspacos')

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const num = Number(frm.innumeros.value)
    let estrelas = ''
    for (let i = 1; i <= num; i++){
        if (i%2==1){
            estrelas += '*'
        }else{
            estrelas += '-'
        }
    }
    res.innerHTML = estrelas
})