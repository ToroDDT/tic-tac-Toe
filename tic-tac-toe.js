const DOM = {
    cellOne: document.getElementById("cellone"),
    cellTwo: document.getElementById("cell-two"),
    cellThree: document.getElementById("cell-three"),
    cellFour: document.getElementById("cell-four"),
    cellFive: document.getElementById("cell-five"),
    cellSix: document.getElementById("cell-six"),
    cellSeven: document.getElementById("cell-seven"),
    cellEight: document.getElementById("cell-eight"),
    cellNine: document.getElementById("cell-nine"),
    playerType : document.getElementById("type")
}

DOM.cellOne.addEventListener("click", () =>{
    player = DOM.playerType.innerText 
    switch (player){
         case "x": 
             DOM.cellOne.innerHTML = "x"
             break;
         case "o":
             DOM.cellOne.innerHTML = "o"
             break;
    }
    
    playerChoices(1)
    changePlayerType()
 
 })
 
 DOM.cellTwo.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellTwo.innerHTML = "x"
              break;
          case "o":
              DOM.cellTwo.innerHTML = "o"
              break;
     }
     
     playerChoices(2)
     changePlayerType()
 })
 DOM.cellThree.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellThree.innerHTML = "x"
              break;
          case "o":
              DOM.cellThree.innerHTML = "o"
              break;
     }
     playerChoices(3)
     changePlayerType()
 })
 DOM.cellFour.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellFour.innerHTML = "x"
              break;
          case "o":
              DOM.cellFour.innerHTML = "o"
              break;
     }
     playerChoices(4)
     changePlayerType()
 })
 DOM.cellFive.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellFive.innerHTML = "x"
              break;
          case "o":
              DOM.cellFive.innerHTML = "o"
              break;
     }
     playerChoices(5)
     changePlayerType()
 })
 DOM.cellSix.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellSix.innerHTML = "x"
              break;
          case "o":
              DOM.cellSix.innerHTML = "o"
              break;
     }
     playerChoices(6)
     changePlayerType()
 })
 DOM.cellSeven.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellSeven.innerHTML = "x"
              break;
          case "o":
              DOM.cellSeven.innerHTML = "o"
              break;
     }
     playerChoices(7)
     changePlayerType()
 })
 DOM.cellEight.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellEight.innerHTML = "x"
              break;
          case "o":
              DOM.cellEight.innerHTML = "o"
              break;
     }
     playerChoices(8)
     changePlayerType()
 })
 DOM.cellNine.addEventListener("click", () => {
     player = DOM.playerType.innerText 
     switch (player){
          case "x": 
              DOM.cellNine.innerHTML = "x"
              break;
          case "o":
              DOM.cellNine.innerHTML = "o"
              break;
     }
     playerChoices(9)
     changePlayerType()
 })