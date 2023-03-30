/*
Passaggi 
1-Creo un collegamento tra la select e js
2-Creo un ciclo che mi vada a creare 100 box
3-Creo una funzione che mi cambi i livelli

4- Reset 
5- Aggiungere alla generazione dei livelli le bombe
6-Far cancellare al Reset le bombe
7-Far cancellare la griglia 
8-Far azzerare il punteggio
9-Cancellare il messaggio di fine gioco
10-Verifico se la casella cliccata è una bomba 
11- Se la casella cliccata è una bomba allora da li il fine gioco
12- Se non è una bomba aggiungo + 1 al punteggio 
13-Il fine gioco è quanto il punteggio raggiunto è uguale al numero di caselle che non sono delle bombe
-Il fine gioco rende visibili tutte le bombe 
-Stampare il messaggio  col punteggio e diverso in base alla vittoria o alla sconfitta
-Congelo la griglia e la opacizzo 
*/


/******************************************************************

COSTANTI E VARIABILI

*******************************************************************/


const button = document.querySelector("button");
const container = document.querySelector("#gridcontainer");
const select = document.querySelector("#livelli");
const start = document.querySelector("#start");
const reset = document.querySelector("#reset");


/******************************************************************

CICLI E FUNZIONI

*******************************************************************/

start.addEventListener("click" , function(){
  for (let i = 1; i <= select.value; i++) {
    let contenitoreNumeri = document.createElement("div");
    contenitoreNumeri.classList = "casella hide-number";
    contenitoreNumeri.innerText = i;
    contenitoreNumeri.addEventListener('click', function () {
    contenitoreNumeri.classList.add('back-color-box-click');
    
      console.log(i)
    });

    if (select.value == 81) {
      contenitoreNumeri.classList = "casellaMedia hide-number"
    }
    else if(select.value == 49) {
      contenitoreNumeri.classList = "casellaDiff hide-number"
    }
    container.append(contenitoreNumeri)  
    }
  });

  reset.addEventListener("click", function(){
    container.innerText = ""
  }) 

  
/******************************************************************

FUNZIONI

*******************************************************************/



  


















