//cria a referência ao form e aos elementos h2 e h3
const frm = document.querySelector('form')
const resp1 = document.querySelector('h2')
const resp2 = document.querySelector('h3')

//cria um 'ouvinte' de evento, acionado quando o botão submit for clicado

frm.addEventListener('submit', (e) => {
    const titulo = frm.inTitulo.value //obtém conteúdos dos campos
    const duracao = Number(frm.inDuracao.value)
    const horas = Math.floor(duracao / 60) //arredonda o valor para baixo
    const minutos = duracao % 60 //obtém o resto da divisão
    
    resp1.innerHTML = titulo
    resp2.innerHTML = `o filme tem ${horas} h e ${minutos} de duração.`

    e.preventDefault() //evita o envio do form
})
