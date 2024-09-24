function somaValores(valor1, valor2) {
    if (typeof valor1 !== "number" || typeof valor2 !== "number") {
        throw new TypeError("Os valores devem ser numeros")
    }
    return valor1 + valor2
}

console.log(somaValores(10, 20));


try {
    console.log(somaValores(10,20))
    console.log(somaValores('10',20))

} catch (erro){
    console.error(erro.message)
    console.error(erro.name)
    console.error(erro.stack)

}