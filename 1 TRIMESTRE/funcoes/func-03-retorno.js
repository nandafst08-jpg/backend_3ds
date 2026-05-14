// funcoes de retorno exigem o termo 'return'
// permitem tornar disponiveis os dados processados
// Reaproveitamos e ações sequenciais
// podemos armazenar as funcoes de retorno
// as variaveis, funcoes, arrays, etc.

function meuSalario(salario){
    const contaLuz = 145.87
    const aluguel = 1350.54
    const restoSalario = salario - (contaLuz+aluguel)
    //console.log(restoSalario) // não serve p/ usuário
    return `O resto do seu salário é R$ ${restoSalario.toFixed(4).replace(".",",")}`
}
const resto = meuSalario(14000.0)
console.log(resto)
