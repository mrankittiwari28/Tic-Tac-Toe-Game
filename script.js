console.log("Welcome to Tic Tac Toe");
let music = new Audio("music.mp3");
let audioturn = new Audio("tune-26043.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X"
let isgameover = false;


// function to change the turn

const changeTurn = () => {

    return turn === "X" ? "0" : "X"
}


// Function to check for a win

const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector('.Info').innerText = boxtext[e[0]].innerText + " Won "
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"

        }

    })
}

// Game Logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {

                document.getElementsByClassName('Info')[0].innerText = "Turn for " + turn;
            }
        }


    })

});

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""

    });
    turn = "X";
    isgameover = false;

    document.getElementsByClassName('Info')[0].innerText = "Turn for " + turn;


    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"


})