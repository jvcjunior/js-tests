
// Applies the cesar cypher with the given rotation to
//the passed in text and returns it
// function encipher(text, rotation) {
//     return text.split('').map(letter => {
//         console.log(letter, rotation)
//         return String.fromCharCode(letter.charCodeAt(0) + rotation);
//     }).join("");
// }
const MAX_CODE = 122;
const MIN_CODE = 97;

function encipher(text, rotation) {
    return text.split('').map(function(letter){
        const code = letter.charCodeAt(0);
        var nextCode;

        if(MIN_CODE <= code && code <= MAX_CODE) {
          nextCode = code + rotation;
        
          if(nextCode > MAX_CODE){
            nextCode = MIN_CODE + (nextCode - MAX_CODE) - 1;
          }
        }
        
        return String.fromCharCode(nextCode ? nextCode : code);
    }).join("");
}
//encipher("banana", 2) === "dcpcpc";
//console.log(encipher("aaaaaa", 2)  === "cccccc");
console.log(encipher("     xuxa xuxa    ", 5));