/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  if (str.length === 0) return true;

  const newstr = [];
  for (let i = 0; i < str.length; i++) {
    let val = str.charAt(i).charCodeAt(0);
    if (str.charAt(i).match(/[a-zA-Z0-9]/)) {
      newstr.push(str.charAt(i).toLowerCase());
    }
  }

  console.log(newstr);

  let l = 0;
  let r = newstr.length - 1;
  while (l <= r) {
    if (newstr[l] !== newstr[r]) return false;
    l++;
    r--;
  }
  return true;
}

module.exports = isPalindrome;
