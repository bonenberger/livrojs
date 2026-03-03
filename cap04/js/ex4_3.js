const bairro = prompt('bairro de entrega: ')
        let taxaEntrega
        switch (bairro) {
            case 'centro': 
                taxaEntrega = 5
                break
            case 'fragata':
                taxaEntrega = 6
                break 
            case 'três vendas': 
                taxaEntrega = 7
                break
            case 'laranjal': 
                taxaEntrega = 10
                break
            default: 
                taxaEntrega = 8
        }
        alert(`taxa de entrega: R$ ${taxaEntrega.toFixed()}`)