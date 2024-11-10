
function checkVowel(str){
    let count = 0
    const vowels = "aeiou"
    for(let i = 0; i< str.length; i++){
        if(vowels.indexOf(str[i].toLowerCase()) !== -1){
            count++
        }
    }
    return count
}
console.log(checkVowel("sahIl"))