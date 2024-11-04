function prod(produto){

    let btn = parseInt(produto)

    switch(btn){
        case 1: 
            let roupa1 = document.querySelector("#camisaACDC").value
            let valor1 = parseFloat(document.querySelector("#valor1").value)
            let qtd1 = ParseInt(document.querySelector("#qtd1").value)
            let total1 = valor1 * qtd1
            alert(total1)
            //alert("Peça: " + roupa1 + "\n Valor : R$" + valor1 + "\n Quantidade: " + qtd1 + "\n Total: " + total1)
        break
        case 2:
            let roupa2 = document.querySelector("#camisaACDC").value
            let valor2 = parseFloat(document.querySelector("#valor1").value)
            let qtd2 = ParseInt(document.querySelector("#qtd1").value)
            let total2 = valor2 * qtd2
            alert(total2)
        break
        case 3: alert(btn)
        break
        case 4: alert(btn)
        break
        case 5: alert(btn)
        break
        case 6: alert(btn)
        break
        default: alert("Nenhum deles")
    }
}