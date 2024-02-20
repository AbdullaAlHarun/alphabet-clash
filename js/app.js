
const audio = new Audio();
let isGamePlayOn = false;
const artBoard = document.getElementById('art-board');
function handleKeyboardKeyUpEvent(event){
   if (isGamePlayOn == false) return;
   
   
    const playerPressed = event.key;

    //stop the game if player press ESc button
    if (playerPressed === 'Escape'){
        gameOver();
    }


    //get the expected to press 

    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    // check matched or not 

    if(playerPressed === expectedAlphabet){

        audio.src = "../audio/right.mp3";
        audio.play();

        const currrentScore =getTextElementValueById('current-score');
        const updatedScore = currrentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //get the current score option : 2
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {

        audio.src = "../audio/wrong.mp3";
        audio.play();
        
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1; 

        const updatedLifeParcentage = (updatedLife / 5) * 100;
        artBoard.style.background = `linear-gradient(#FFFFFFB3 ${updatedLifeParcentage}%,red)`;


        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();     
        }
    }

}


// captured keyboard key press
document.addEventListener('keyup', handleKeyboardKeyUpEvent )

// between moving secreen option 2 
function continueGame(){
    //step-1: generate a random alphabate 
    const alphabate = getRandomAlphabet();

    //step-2 set genarated alphabate to the screen  

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabate;

    //set background color 
    setBackgroundColorById(alphabate);
}

function play(){
    //hide everything show play ground 
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    continueGame();

    //reset score and life 
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    isGamePlayOn = true;
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //update final score
    //get the final score 
    const lastScore =getTextElementValueById('current-score');
    setTextElementValueById('last-score', lastScore);

    //clear the last selected key 
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);

    isGamePlayOn = false;
    artBoard.style.background = "linear-gradient(#FFFFFFB3 100%,red)";
}
