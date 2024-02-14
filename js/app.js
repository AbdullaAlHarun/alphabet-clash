
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

    

}
