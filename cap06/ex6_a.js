const frm = document.querySelector('form')
const resp = document.querySelector('pre')
const clubes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const time = frm.inclube.value
    clubes.push(time)
    
    frm.inclube.value = ''
    frm.inclube.focus()
    
})

frm.btlistar.addEventListener('click', () => {
    resp.innerText = clubes.join('\n')
})

frm.bttabela.addEventListener('click', () => {
    if (clubes.length == 0) {
        alert('nenhum clube listado')
        return
    }

    if (clubes.length % 2 == 1)
        {
        alert('o número de clubes listado não é par.')
        return
    }

    let tabela = ''
        for (let i = 0; i < clubes.length / 2; i++) {
            const timeA = clubes[i]
            const timeB = clubes[clubes.length - 1 - i]
            tabela += `${timeA} x ${timeB}\n\n`
        }
    resp.textContent = tabela
})
