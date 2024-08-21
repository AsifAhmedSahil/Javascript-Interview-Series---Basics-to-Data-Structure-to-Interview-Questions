

const reverseInteger = (int) => {
    const reverseNumber = int.toString().split("").reverse().join("")
    return parseInt(reverseNumber) * Math.sign(int)
}

console.log(reverseInteger(-123))