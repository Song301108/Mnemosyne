// BASICO
// Exercício 1
// let num = prompt("Digite um número:");

// if (num > 0) {

//     console.log("Positivo.");

// } else if (num < 0) {

//     console.log("Negativo.");

// } else {

//     console.log("É zero.");

// }

// Exercício 2
// let num = prompt("Digite um número:");

// if (num % 2 == 0) {

//     console.log("É par.");

// } else {

//     console.log("É ímpar.");

// }

// Exercício 3
// let idade = prompt("Digite sua idade:");

// if (idade <= 12) {

//     console.log("Criança.");

// } else if (idade >= 18) {

//     console.log("Adulto.");

// } else {

//     console.log("Adolescente.");

// }

// Exercício 4
// let num3 = prompt("Digite a nota do aluno:");

// if (num3 >= 60) {

//     console.log("Aprovado.");

// } else {

//     console.log("Reprovado.");

// }

// INTERMEDIÁRIO
// Exercício 1
// let num1 = parseFloat(prompt("Digite um número:"));
// let num2 = parseFloat(prompt("Digite outro número:"));
// let operacao = prompt("Digite uma operacao. Ex: +, -, *, /:");

// switch (operacao) {
//     case "+":

//         let resultadoSoma = num1 + num2;
//         console.log("resultado", resultadoSoma);

//         break;
       
//     case "-":

//         let resultadoSubtracao = num1 - num2;
//         console.log("resultado", resultadoSubtracao);

//         break;

//     case "*":

//         let resultadoMultiplicacao = num1 * num2;
//         console.log("resultado", resultadoMultiplicacao);

//         break;

//      case "/":

//         let resultadoDivisao = num1 / num2;
//         console.log("resultado", resultadoDivisao);

//         break;

//     default:

//        console.log("Operador inválido.")

//         break;
// }

// Exercício 2
// const numA = parseFloat(prompt("Digite um números:"));
// const numB = parseFloat(prompt("Digite um números:"));
// const numC = parseFloat(prompt("Digite um números:"));

// let maior = numA

// if (numB > maior) {

//     maior = numB

// } if (numC > maior) {

//     maior =numC

// }

//     console.log({maior});


// Exercício 3
// let compra = prompt("Digite o valor da compra:");

// if (compra > 100) {

//     console.log(compra *0.9);

// } else {

//     console.log(compra);

// }

// // Exercício 4
// let usuario = prompt("Digite seu nome de usuario:");
// let senha = prompt("Digite sua senha:");

// if (usuario == "admin" && senha == "1234") {

//     console.log("Login bem-sucedido.");

// } else {

//     console.log("Acesso negado.");

// }

// AVANÇADO
// Exercício 2
// let nota = parseFloat(prompt("Digite uma nota:"));

// if (nota >= 90 && nota <= 100) {

//     console.log("A")
    

// } else if (nota >= 80 && nota <= 89) {

//     console.log("B")

// } else if (nota >= 70 && nota <= 79) {

//     console.log("C")

// } else if (nota >= 60 && nota <= 69) {

//     console.log("D")

// } else if (nota <= 60) {

//     console.log("E")

// }

// Exercício do Ano Bissexto
// let ano = prompt("Digite um ano:");

// if (ano % 4 == 0 ) {

//     console.log("Bissexto.");

// } else if (ano % 400 == 0) {

//     console.log("Bissexto.");

// } else {

//     console.log("Não é Bissexto.");

// }