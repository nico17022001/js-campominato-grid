/*
Passaggi 
1-Creo un collegamento tra la select e js
2-Creo un ciclo che mi vada a creare 100 box
3-Creo una funzione che mi cambi i livelli
*/

const button = document.querySelector("button")
const container = document.querySelector("#gridcontainer")
const select = document.querySelector("#livelli")

select.addEventListener("change" , function(){
  for (let i = 1; i <= this.value; i++) {
    let contenitoreNumeri = document.createElement("div")
    contenitoreNumeri.classList = "casella hide-number";
    contenitoreNumeri.innerText = i;


    contenitoreNumeri.addEventListener('click', function () {
    contenitoreNumeri.classList.add('back-color-box-click');
      console.log(i)
    });

    if (this.value == 81) {
      contenitoreNumeri.classList = "casellaMedia hide-number"
    }
    else if(this.value == 49) {
      contenitoreNumeri.classList = "casellaDiff hide-number"
    }
    container.append(contenitoreNumeri)  
  }
})


  


















