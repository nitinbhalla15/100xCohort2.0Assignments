/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    if(!numbers){
        return null;
    }

    let largestNumber = numbers[0];
    numbers.forEach((num)=>{
        if(num>largestNumber){
            largestNumber=num;
        }
    })
    return largestNumber;
}

module.exports = findLargestElement;