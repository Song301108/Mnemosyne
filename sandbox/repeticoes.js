// for(let contador = 1; contador <= 5; contador++){

//     console.log("Contagem: ", contador);

// }




///////////////////////////////////////
// for (let i = 1; i <= 5; i++) {
//     console.log(`Contagem: ${i}`);
// }




// for(let contador = 1; contador <= 10; contador++){

//     console.log("Contagem: ", contador);

// }

// FOR 
// for (let contador = 1; contador <= 1000); {

//     console.log("Contagem: ", contador);

// }

// WHILE
// let contador = 1;
// while (contador <= 5) {

//     console.log("Contagem: ", contador);
//     contador++;

// }

// DO WHILE
// let mensagem = "";
// do {
   
//     mensagem = prompt("Digite um texto");

//     alert("Texto digitado:" + mensagem);
 
// } while (mensagem != "sair");

// console.log("sair!")

// EXERCÍCIO 2
// let num = prompt("Insira um número: ");

// for (let contador = 1; contador <= 10; contador++){

//     let valorCalculado = num * contador;

//     let mensagem = `${num} x ${contador} = ${valorCalculado}`;

//     console.log(mensagem);

// }

let num2 = parseInt(prompt("Insira um número N: "));

for(let contador = 1; contador <= num2; contador++){

    let valorCalculado = num2 + contador;

    let mensagem = `${num2} + ${contador} = ${valorCalculado}`;
    
    console.log(mensagem);
   
}