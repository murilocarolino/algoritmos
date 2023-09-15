'use strict'

const botaoSomar = document.getElementById('SOMAR')
const botaoIndentificar = document.getElementById('indentificar')

function somar () {
    const numero1 = Number(document.getElementById('numero1').value)
    const numero2 = Number(document.getElementById('numero2').value)
    const resultado1 = document.getElementById('resultado1')

    const total = numero1 + numero2

    resultado1.textContent = total
}

function indentificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')
    if (numero > 0 ){
        resultado.textContent = 'POSITIVO'  
    } else if (numero < 0 ){
        resultado.textContent = 'NEGATIVO'
    }else{
        resultado.textContent = 'ZERO'
    }
}

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);
    const nota4 = parseFloat(document.getElementById("nota4").value);
    
    const media1 = (nota1 + nota2 + nota3 + nota4) / 4;
    const resultadoDiv = document.getElementById("resultado-d");
    
    if (media1 >= 7) {
        resultadoDiv.textContent = "Aprovado";
    } else {
        const notaExame = parseFloat(document.getElementById("nota-exame").value);
        const media2 = (media1 + notaExame) / 2;
        
        if (media2 >= 5) {
            resultadoDiv.textContent = "Aprovado em exame";
        } else {
            resultadoDiv.textContent = "Reprovado";
        }
    }
    
    resultadoDiv.textContent += " - Média: " + media1.toFixed(2);
    
}
function verificarParImpar() {
    const numero = parseInt(document.getElementById("numero-item2").value);
    const resultadoDiv = document.getElementById("resultado-item2");
    
    if (isNaN(numero)) {
        resultadoDiv.textContent = "Digite um valor numérico.";
    } else {
        if (numero % 2 === 0) {
            resultadoDiv.textContent = numero + " é um número par.";
        } else {
            resultadoDiv.textContent = numero + " é um número ímpar.";
        }
    }
}

botaoSomar.addEventListener('click', somar)
botaoIndentificar.addEventListener('click', indentificar)
