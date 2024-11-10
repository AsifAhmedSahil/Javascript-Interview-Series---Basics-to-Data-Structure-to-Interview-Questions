// *palindrome a string

// ! noyon ==> noyon
// * approach -> last and first character match -> then index ++ index --
//* start ++ & end--
// * if 1st and

function isPalindrome(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true
}

console.log(isPalindrome("noyon"))
