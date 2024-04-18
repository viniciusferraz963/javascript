var idade = 24
    console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Você não tem direito a voto!`)
} else if (idade < 18 || idade > 65) {
    console.log (`O seu voto é opcional!`)
} else {
    console.log(`O seu voto é OBRIGATÓRIO!`)
}

// Código de altorização de idade para voto