// for(let contador = 1; contador <= 5; contador++){

//     console.log("Contagem: ", contador);

// }




///////////////////////////////////////
// for (let i = 1; i <= 5; i++) {
//     console.log(`Contagem: ${i}`);
// }


// BÁSICO
// EXERCÍCIO 1

function exercicioRep01 () {

   for(let contador = 1; contador <= 10; contador++){

      console.log("Contagem: ", contador);

   }

   let divDeLogs = document.querySelector(".logs");

   let paragrafo = document.createElement("p");

   paragrafo.innerHTML = "Exercício 01 de repetição executado, confira o console."

   divDeLogs.appendChild(paragrafo);

}

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

function exercicioRep02 () {
 
 let num = prompt("Insira um número: ");

   for (let contador = 1; contador <= 10; contador++){

    let valorCalculado = num * contador;

    let mensagem = `${num} x ${contador} = ${valorCalculado}`;

    console.log(mensagem);

   }

}

// EXERCÍCIO 3

function exercicioRep03 () {

  let num2 = parseInt(prompt("Insira um número N: "));

  for(let contador = 1; contador <= num2; contador++){

    let valorCalculado = num2 + contador;

    let mensagem = `${num2} + ${contador} = ${valorCalculado}`;
    
    console.log(mensagem);
   
  }

}

// INTERMEDIÁRIO
// EXERCÍCIO 1

function exercicioRepInter01 () {

  for (let contador = 1; contador <= 50; contador++){

    if (contador % 2 == 0)

      console.log(contador);

  }

}

// EXERCÍCIO 2

function exercicioRepInter02 () {
  let numeroAleatorio = Math.floor(Math.random() * 100);

  let chute = null;

 while (chute != numeroAleatorio) {

    chute = parseInt(prompt("Chute um número:"));

    if (chute != numeroAleatorio) {

        if (chute > numeroAleatorio) {
    
            alert("Chutou alto.");
    
        } else {
    
            alert("Chutou baixo.");
    
        }

    }

 }

}

// EXERCÍCIO 3
// let contador = null;

// while (contador > 0) {

//     contador = parseInt(prompt("Insira um número maior que zero:"));

//     for (let contador ; contador > 0; contador--)

    
// } 
