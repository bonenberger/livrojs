const frm = document.querySelector('form')
const tabela = document.querySelector('#tabelaCorpo')

// Carrega do localStorage
const candidatos = JSON.parse(localStorage.getItem('candidatos')) || []

// Salvar dados
const salvarDados = () => {
    localStorage.setItem('candidatos', JSON.stringify(candidatos))
}

// Limpar campos
const limparCampos = () => {
    frm.innome.value = ''
    frm.inacertos.value = ''
    frm.innome.focus()
}

// Renderizar tabela
const renderizarTabela = (dados) => {
    if (dados.length === 0) {
        tabela.innerHTML = '<tr><td colspan="3">Nenhum candidato cadastrado</td></tr>'
        return
    }

    tabela.innerHTML = dados
        .map((c, i) => `
            <tr>
                <td>${i + 1}</td>
                <td>${c.nome}</td>
                <td>${c.acertos}</td>
            </tr>
        `)
        .join('')
}

// Ao carregar página
renderizarTabela(candidatos)

// Cadastro
frm.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = frm.innome.value.trim()
    const acertos = Number(frm.inacertos.value)

    if (!nome || isNaN(acertos)) {
        alert('Informe dados válidos.')
        return
    }

    candidatos.push({ nome, acertos })

    salvarDados()
    renderizarTabela(candidatos)
    limparCampos()
})

// Listar todos
frm.btListar.addEventListener('click', () => {
    renderizarTabela(candidatos)
})

// Ver aprovados
frm.btAprovados.addEventListener('click', () => {
    if (candidatos.length === 0) {
        alert('Lista vazia')
        return
    }

    const minimo = Number(prompt('Nota mínima para aprovação:'))

    if (isNaN(minimo)) {
        alert('Valor inválido')
        return
    }

    const aprovados = candidatos
        .filter(c => c.acertos >= minimo)
        .sort((a, b) => b.acertos - a.acertos)

    renderizarTabela(aprovados)
})