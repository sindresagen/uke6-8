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
let outputContent;



// controller
function txtToArray(input) {
    txtToMorse = '';
    var toUpperCase = input.value.toUpperCase();
    console.log(toUpperCase);
    inputArray = toUpperCase.split('');
    console.log(inputArray);
    for (let i = 0; i < inputArray.length; i++)
    for (let j = 0; j < alphabetArray.length; j++) {
        if (inputArray[i] === alphabetArray[j]) {
            txtToMorse += morseCodeArray[j];
            txtToMorse += ' ';

        }
    }
    updateView();
}


