// model
const morseCodeArray = ['.-', '-...', '-.-.', '-..', '.', '..-.', 
    '--.', '....', '..', '.---', '-.-', '.-..', 
    '--', '-.', '---', '.--.', '--.-', '.-.', 
    '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];
const alphabetArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 
'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 
'U', 'V', 'W', 'X', 'Y', 'Z', ' ', 'Æ', 'Ø', 'Å'];



let inputArray = [];
let txtToMorse = '';
// let txtToArray;
let alphabet = true;


// controller

function txtToArray(input) {
    if (alphabet === true) {
        txtToMorse = '';
        var toUpperCase = input.value.toUpperCase();
        inputArray = toUpperCase.split('');
        for (let i = 0; i < inputArray.length; i++)
        for (let j = 0; j < alphabetArray.length; j++) {
        if (inputArray[i] === alphabetArray[j]) {
            console.log(j);
            txtToMorse += morseCodeArray[j];
            txtToMorse += ' ';

            }
        }
    }
    if (alphabet === false) {
        txtToMorse = '';
        var toUpperCase = input.value.toUpperCase();
        inputArray = toUpperCase.split(' ');
        for (let i = 0; i < inputArray.length; i++)
        for (let j = 0; j < morseCodeArray.length; j++) {
            if (inputArray[i] === morseCodeArray[j]) {
                txtToMorse += alphabetArray[j];
                

            }
        }
    }
    updateView();
}
    
   


function changeAlphabet(){
    alphabet = alphabet ? false : true; 
    console.log(alphabet)
}


