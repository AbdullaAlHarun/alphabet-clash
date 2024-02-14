
// between moving secreen option 1 
// function play(){
//    //hide the home screen 
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    //show the home screen 
//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden')
// }
function handleKeyboardKeyUpEvent(event){
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

        //get the current score option : 1 
        //  const currentScoreElement = document.getElementById('current-score');
        //  const currentScoreText = currentScoreElement.innerText;
        //  const currrentScore =  parseInt(currentScoreText);
        //  console.log(currrentScore);
        
        //  // increase the score by 1 
        // const newScore = currrentScore + 1;

        // // show the update score  
        // currentScoreElement.innerText = newScore;
        const currrentScore =getTextElementValueById('current-score');
        const updatedScore = currrentScore + 1;
        setTextElementValueById('current-score', updatedScore);
        //get the current score option : 2
        
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {

        // option 1 : 
        //  //step -1 :  get the current life number 
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // //step-2: reduce the life count 
        // const newLife = currentLife - 1;

        // //step 3: display the update life count 
        // currentLifeElement.innerText = newLife;


        //option: 2 
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1; 
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