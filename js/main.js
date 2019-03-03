let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCompChoice(){
    const choices = ['r','p','s'];
    const randomNo = (Math.floor(Math.random() * 3));
    return choices[randomNo];
}

// console.log(getCompChoice());
function convertToWord(choice){
    if(choice === "r") return "Rock";
    if(choice === "p") return "Paper";
    return "Scissors";
}

function win(userChoice,compChoice){
    userScore ++;
    // console.log("USER wins");
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComprWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  beats  ${convertToWord(compChoice)}${smallComprWord}. You Win ✡ `;
    // document.getElementById(userChoice).classList.add('green-glow');
    // setTimeout( function(){ document.getElementById(userChoice).classList.remove('green-glow')}, 1000);
}


function lose(userChoice, compChoice){
    compScore ++;
    // console.log("USER wins");
    // console.log(userScore);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComprWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  loses to  ${convertToWord(compChoice)}${smallComprWord}. You Lost ☹ `;
}
function draw(userChoice,compChoice){
    // userScore ++;
    // console.log("USER wins");
    // console.log(userScore);
    // userScore_span.innerHTML = userScore;
    // compScore_span.innerHTML = compScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallComprWord = "comp".fontsize(3).sup();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord}  equals  ${convertToWord(compChoice)}${smallComprWord}. You Draw ☯`;
} 

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rp":
        case "pr":
        case "sp":
            win(userChoice,compChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice,compChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice,compChoice);
            break;   
}

}
// game("c")
function main() {
    rock_div.addEventListener('click',() => game("r"));
    paper_div.addEventListener('click',() => game("p"));
    scissors_div.addEventListener('click',() => game("s")) ;   
}
main();
