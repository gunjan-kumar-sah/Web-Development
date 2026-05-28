const boxes = document.querySelectorAll(".box");
const resetBtn = document.getElementById("reset-btn");
const newBtn = document.getElementById("new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.getElementById("msg");

let turnO = true;
let count = 0;

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {

    box.addEventListener("click", () => {

        if(turnO){
            box.innerText = "O";
            box.style.color = "#00ffcc";
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.style.color = "#ff4d6d";
            turnO = true;
        }

        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if(count === 9 && !isWinner){
            showDraw();
        }
    });

});

const showWinner = (winner) => {

    msg.innerText = `🏆 Winner is ${winner}`;
    msgContainer.classList.remove("hide");

    disableBoxes();
};

const showDraw = () => {

    msg.innerText = "😮 Game Draw";
    msgContainer.classList.remove("hide");
};

const disableBoxes = () => {

    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () => {

    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });

    count = 0;
    turnO = true;
};

const resetGame = () => {

    enableBoxes();
    msgContainer.classList.add("hide");
};

const checkWinner = () => {

    for(let pattern of winPatterns){

        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){

            if(pos1 === pos2 && pos2 === pos3){

                showWinner(pos1);
                return true;
            }
        }
    }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);