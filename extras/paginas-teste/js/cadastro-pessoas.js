const frm = document.querySelector('form')
const res = document.querySelector('pre')
const cadastro = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const crm = Number(frm.incrm.value)
    const nome = frm.innome.value
    const endereco = frm.inendereco.value
    const telefone = Number(frm.intelefone.value)
    const cidade = frm.incidade.value
    const especialidade = frm.inespecialidade.value
    cadastro.push({crm, nome, endereco, telefone, cidade, especialidade})
    frm.reset()
    frm.incrm.focus()
})

frm.btlistar.addEventListener('click', () => {
    if (cadastro.length == 0) {
        alert('não há médicos cadastrados')
        return
    }else {
        let lista = ''
        for (const medico of cadastro) {
            const {crm, nome, especialidade} = medico
            lista += `crm: ${crm}\nnome: ${nome}\nespecialidade: ${especialidade}\n\n`
            res.innerText = lista
       } 
    }
})