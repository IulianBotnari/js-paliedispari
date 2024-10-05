let scelta = prompt("Scegli pari o dispari")

console.log(scelta);


let numeroUtente = prompt ("Inserisci un numero da 1 a 5")


let numeroPc = randomNumber()

console.log(numeroPc)

function randomNumber(){
  
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
}
let sum = (Number (numeroPc) + Number (numeroUtente))

console.log(sum);



function pariDispari(number) {

return number % 2 === 0
  
}

let verifica = pariDispari(sum)

console.log(verifica);


if (verifica === true && scelta === "pari") {
  console.log("hai vinto");
  
} else if (verifica === false && scelta === "dispari") {
  console.log("hai vinto");
  
} else{
  console.log("hai perso");
  

}
