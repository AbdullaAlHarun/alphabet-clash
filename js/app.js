
// between moving secreen option 1 
// function play(){
//    //hide the home screen 
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    //show the home screen 
//    const playGroundSection = document.getElementById('play-ground');
//    playGroundSection.classList.remove('hidden')
// }

// between moving secreen option 2 
function continueGame(){
    //step-1: generate a random alphabate 
    const alphabate = getRandomAlphabet();

    //step-2 set genarated alphabate to the screen  

    const currentAlphabetElement = document.getElementById('current-alphabate');
    currentAlphabetElement.innerText = alphabate;

    //set background color 
    setBackgroundColorById(alphabate);
}


function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
