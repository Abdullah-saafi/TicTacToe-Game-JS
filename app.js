let box = document.querySelectorAll(".box1");
let game = document.querySelector(".MainContainer")
let restBtn = document.querySelector(".restBtn")
let restError = document.querySelector(".restError")
let winnerShow = document.querySelector(".winner")
let winnerName = document.querySelector(".winnerName")
let restartBtn = document.querySelector(".startGame")

let winnerPattern = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
] 



let turnOfX = true;

function disableBox() {
  box.forEach(item => item.style.pointerEvents = "none");
}

const enableBox = () => {
  box.forEach(item => item.style.pointerEvents = "auto");
};

const resetGame = () => {
  box.forEach(item => {
    item.innerText = "";
    item.style.backgroundColor = "rgb(41, 40, 40)";
    item.classList.remove("clicked", "X", "O");
  });

  winnerShow.style.visibility = "hidden";
  winnerShow.classList.remove("showWinner");
  winnerName.innerText = "";
  game.style.filter = "";
  restBtn.style.visibility = "visible";
  restError.style.visibility = "hidden";
  turnOfX = false;


  enableBox();
};

box.forEach((item)=> {
  item.addEventListener('click', () =>{
    // item.style.backgroundColor = "
      restError.style.visibility ="hidden"

      if (item.classList.contains('clicked')) return; 

    if (turnOfX) {
      item.classList.add('clicked', 'X');
      item.innerHTML= 'X'
      turnOfX=false

    } else{
      item.classList.add('clicked', 'O');
      item.innerHTML= 'O'
      turnOfX=true


    }  
    winner() 
    
  })
})



const winner = ()  =>  {
   for(let types of winnerPattern){
    let box1 = box[types[0]].innerText;
    let box2 = box[types[1]].innerText;
    let box3 = box[types[2]].innerText;

    if(box1 != "" && box2 != "" && box3 != ""   ){

    if (box1 === box2 && box2 === box3) {
      winnerShow.style.visibility="visible"
      winnerShow.classList.add("showWinner"); 
      winnerName.innerHTML = `Congratulations you win "${box1}"`
      game.style.filter = "blur(10px)";
      restBtn.style.visibility="hidden";
      disableBox()
    }
  }

    

   }
  }


  restBtn.addEventListener("click" ,resetGame)
  restartBtn.addEventListener("click" ,resetGame)

