function calcular(operador){
    numero1 = parseFloat(document.getElementById('numero1').value)
    numero2 = parseFloat(document.getElementById('numero2').value)

    if(operador == "+"){
        resultado= numero1+numero2
    }else if(operador == "-"){
        resultado= numero1-numero2
    }else if(operador == "/"){
        resultado= numero1/numero2
    }else if(operador == "*"){
        resultado= numero1*numero2
    }

    document.getElementById('resultado').innerHTML = resultado
}