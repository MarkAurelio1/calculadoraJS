

function outcome() {
    //getElementById= Pega um elemento por uma identificação no caso um ID
    let num1 = Number(document.getElementById('num-one').value)
    let num2 = Number(document.getElementById('num-two').value)
    let total = 0
    //checked= Se a box esta verificada ou não
    if (document.getElementById('box1').checked)
        total = num1 + num2
    else if (document.getElementById('box2').checked)
        total = num1 - num2
    else if (document.getElementById('box3').checked)
        total = num1 * num2
    else
        total = num1 / num2
    document.getElementById('resultadoArea').innerHTML = 'Resultado: ' + String(total)
}