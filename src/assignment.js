// ========================
// DO NOT EDIT THIS BLOCK
const assignment = {};
// ========================


function sumOfNumbers(arrayOfNumbers) {
    let total = 0;
    for(let i=0; i < arrayOfNumbers.length; i++) {
        total += arrayOfNumbers[i];
    }
    return total;
}
assignment.sumOfNumbers = sumOfNumbers;

function countEvenNumbers(arrayOfNumbers) {
    let count = 0;
    for(ele of arrayOfNumbers) {
      if(ele%2 === 0) {
        count++;
      }
    }
    return count;
}
assignment.countEvenNumbers = countEvenNumbers;

function celsiusToFahrenheit(arrayOfNumbers) {
    let arrayOfFahr = arrayOfNumbers.map((x)=>{
        temp = x * 1.8 + 32
        return Math.trunc(temp)
    })
    return arrayOfFahr
}
assignment.celsiusToFahrenheit = celsiusToFahrenheit;


// ========================
// DO NOT EDIT THIS BLOCK
module.exports = assignment;
// ========================

