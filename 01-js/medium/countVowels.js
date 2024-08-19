/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    if(!str){
      return 0;
    }
    str=str.toLowerCase();

    let vowelCount = 0;
    str.split('').forEach((chr)=>{
      if(chr=='a' || chr=='e' || chr=='i' || chr=='o' || chr=='u'){
        vowelCount++;
      }
    })
    return vowelCount;
}

module.exports = countVowels;