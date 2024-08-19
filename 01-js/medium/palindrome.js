/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if(!str){
    return true;
  }
  str=str.toLowerCase();

  str = str.split('');

  let start=0;
  let end=str.length-1;
  while(start<=end){
    if(str[start]==' ' || !(str[start] >='a' && str[start]<='z') ){
      start++;
      continue;
    }else if(str[end]==' ' || !(str[end] >='a' && str[end]<='z') ){
      end--;
      continue;
    }
    else{
      if(str[start]!=str[end]){
        return false;
      }
    }
    start++;
    end--;
  }
  return true;

  
}

module.exports = isPalindrome;
