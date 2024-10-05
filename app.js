let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let boxs = document.querySelectorAll(".btn");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("Game is Started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },300);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },300);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let ranBtns = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(ranBtns);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(ranBtns);
}

function checkAns(idx){
    // console.log("level", level);
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
        
    }else{
        let highScore = level;
        h2.innerHTML = `Game Over! Your Score is <b>${level} ,<br> your Highest Score is ${highScore} </b> <br>Press any key to start`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        reset();
    }
    }


function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let btnAll = document.querySelectorAll(".btn");
for(btn of btnAll){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}