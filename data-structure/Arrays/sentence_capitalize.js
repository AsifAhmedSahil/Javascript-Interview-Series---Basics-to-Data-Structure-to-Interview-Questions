

const sentenceCapitalize = (str) =>{
   return str.toLowerCase().split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")
}

console.log(sentenceCapitalize("hello world"))