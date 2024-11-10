// *reverse a string without using reverse buildin function

// !string under the hood like array 
// * string memory allcation like array word by word : [H][e][l][l][o]
// * one character one bit
// * 
    

function reverseString(str){
    let reverseStr = ""

    for(let i = str.length  ; i > 0 ; i--){
        reverseStr = reverseStr + str[i-1]
    }

    return reverseStr;
}

console.log(reverseString("hello"))