/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let ob1 = {} ;
  let ob2 = {};
  for (let i = 0 ; i<str1.length;i++){
    let c = str1.charAt(i).toLowerCase();
    if (c === " ")continue;
    ob1[c] = ob1[c] || 0;
    ob1[c]+=1;
  }
  for (let i=0;i<str2.length;i++){
    let c = str2.charAt(i).toLowerCase();
    if (c === " ")continue;
    ob2[c] = ob2[c] || 0 ;
    ob2[c] +=1;
  }
  res = true;
  if (Object.keys(ob1).length
!=Object.keys(ob2).length
)return false;
// console.log(ob1,ob2)
    // console.log(ob1.length,ob2.length)

  for (let key in ob1){
    if (!key in ob2 || ob1[key]!==ob2[key]){
      res=false;
      break;
    }
  }

  return res;
}

module.exports = isAnagram;