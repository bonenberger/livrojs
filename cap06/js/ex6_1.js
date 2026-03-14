const frm = document.querySelector('form')
const respNome = document.querySelector('span')
const respLista = document.querySelector('pre')

const pacientes = []

frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inpaciente.value
    pacientes.push(nome) //adiciona o nome no final do vetor
    let lista = '' //string para concatenar pacientes
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i+1}. ${pacientes[i]}\n`
    }
    respLista.innerHTML = lista
    frm.inpaciente.value = ''
    frm.inpaciente.focus()
})

//adiciona um 'ouvinte' para o evento click no bturgencia que está no form
frm.bturgencia.addEventListener('click', () => {
    if (!frm.checkValidity()) { //verifica se as validações estão ok(no caso paciente is required)
        alert('informe o nome do paciente a ser atendido em caráter de urgência')
        frm.inpaciente.focus() //posiciona o cursor no campo inpaciente
        return
    }
    const nome = frm.inpaciente.value //obtém o nome do paciente
    pacientes.unshift(nome) //adiciona o paciente ao inicio do vetor
    let lista = ''
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista //exibe a lista de pacientes na página
    frm.inpaciente.value = '' //limpa o conteúdo do campo de formulário
    frm.inpaciente.focus() //posiciona o cursor no campo
})

frm.btatender.addEventListener('click', () => {
    //se o tamanho do vetor = 0
    if (pacientes.length == 0){
        alert('não há pacientes para atender')
        frm.inpaciente.focus()
        return
    }
    const atender = pacientes.shift() //remove do inicio da fila (e obtém o nome)
    respNome.innerText = atender //exibe o nome do paciente em atendimento
    let lista = '' //string para concatenar os pacientes
    pacientes.forEach((paciente, i) => (lista += `${i+1}. ${paciente}\n`))
    respLista.innerText = lista
})