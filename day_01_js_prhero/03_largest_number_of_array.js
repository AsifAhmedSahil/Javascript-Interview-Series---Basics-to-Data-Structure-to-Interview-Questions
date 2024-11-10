// * dont use sort build in function

// !approach
// * 1st index k largetst dhorbo  then loop chalabo compare korbo jodi boro number pai then update kroe dibo largest k

function findLargets(arr){
    let largest = arr[0]
    for( let i = 1; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

console.log(findLargets([2,5,58,6,8,88]))