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

// Exercício 5
const numA = parseFloat(prompt("Digite três números:"));
const numB = parseFloat(prompt("Digite três números:"));
const numC = parseFloat(prompt("Digite três números:"));

let maior = numA

if (numB > maior) {

    maior = numB

} if (numC > maior) {

    maior =numC

}

    console.log({maior});


    // Exercício 2
let compra = prompt("Digite o valor da compra:");

if (compra > 100) {

    console.log(compra * 10/100);

} else {

    console.log("É ímpar.");

}