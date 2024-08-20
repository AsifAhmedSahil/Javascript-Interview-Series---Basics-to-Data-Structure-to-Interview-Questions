// * check palindrom or not

const palindrom = (str) => str.split("").reverse().join("") === str

// console.log(palindrom("abba"))

// ! return true that means it is palindrome


// * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

const PalindromLeetcode = (str) => {
    let s = str.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()

    let i = 0 , j= s.length -1

    while (i < j){
        if(s[i] !== s[j]){
            return false
        }

        i++;
        j--;

    }
    return true
}

console.log(PalindromLeetcode("A man, a plan, a canal: Panama"))