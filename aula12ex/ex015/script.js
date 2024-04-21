function verificar () {
    var data = new Date() //Verifica a data atual do computador
    var ano = data.getFullYear() //getFullYear irá pegar todos os 4 digitos do ano
    var fano = document.getElementById('txtano') //ID do formulário data de nascimento
    var res = document.querySelector('div#res') //ID tirada da div de resultado
    if (fano.value.length == 0 || fano.value > ano) { //Caso não digite nada na caixa de texto ou se a data for maior que a fano (ano atual) o .alert abaixo será acionado.
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade =  ano - Number(fano.value) //Para calcular a idade, precisamos do ano atual - o valor digitado no (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) { //dependendo do checked irá preencher a variavel genero
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src','foto-menino.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src','foto-jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src','foto-homem.png')
            } else {
                //idoso
                img.setAttribute('src','foto-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
            } else if (idade < 21) {
                //jovem
            } else if (idade < 50) {
                //adulto
            } else (idade > 50) {
                //idoso
            }
        }
        res.style.textAlign = 'center' // usa CSS com Javascript
        res.innerHTML = `Você é ${genero} e tem ${idade} anos!`
    }
}