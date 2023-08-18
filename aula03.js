'use script'

const botaoSomar = document.getElementById('somar')
const botaoIdentificar = document.getElementById('identificar')
const botaoMedia = document.getElementById('media')

function somar () {
    const numero1 = Number (document.getElementById('numero1').value)
    const numero2 = Number (document.getElementById('numero2').value)
    const resultado = document.getElementById('resultado')

    const total = numero1 + numero2

    resultado.textContent = total
}

function identificar () {
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if (numero > 0) {
        resultado.textContent = 'POSITIVO'
    } else if (numero < 0) {
        resultado.textContent = 'NEGATIVO'
    } else {
        resultado.textContent = 'ZERO'
    }
}

function media () {
    const nota1 = Number(document.getElementById('nota1').value)
    const nota2 = Number(document.getElementById('nota2').value)
    const nota3 = Number(document.getElementById('nota3').value)
    const nota4 = Number(document.getElementById('nota4').value)

    const md1 = (nota1 + nota2 + nota3 + nota4)/4

    if (media >= 7) {
        alert("Aprovado!! sua média é: " + md1)
    } else (media < 6.99) {
        const ne = prompt ('A sua média ${md1}. Nota de exame: ')

        const md2 = (md1 + Number(ne))/2

        if (md2 > 5.9) {
            alert('Sua média agora é ${md2}. Aprovado no exame1')
        } else {
            alert('Sua média agora é ${md2}. Você foi reprovado.')
        }
    }
}

botaoSomar.addEventListener('click', somar)

botaoIdentificar.addEventListener('click', identificar)

botaoMedia.addEventListener('click', media)