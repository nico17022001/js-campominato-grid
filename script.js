/*
Passaggi 
1-Creo un collegamento tra il bottone e js
2-Creo un ciclo che mi vada a creare 100 box
3-
*/

const button = document.querySelector("button")
const container = document.querySelector("#gridcontainer")

button.addEventListener("click" , generatore )

function generatore(min,max) {
  for (let i = 1; i <= 100; i++) {
    let contenitoreNumeri = document.createElement("div")
    contenitoreNumeri.classList = "casella hide-number";
    contenitoreNumeri.innerText = i;
    contenitoreNumeri.addEventListener('click', function () {
    contenitoreNumeri.classList.add('back-color-box-click');
    console.log(i)
    });
    
    container.append(contenitoreNumeri)  
  }
}




