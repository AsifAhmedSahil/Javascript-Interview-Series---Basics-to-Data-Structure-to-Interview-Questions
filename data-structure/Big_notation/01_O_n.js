// Q: take a array of groceries and write a function which take one by one and find your expexted item

// ** the example o 
// ! O(n)
const groceries = ['milk','eggs',"mango","flour","sugar"]

const checkItem = (item) =>{
    for (let i = 0; i < groceries.length; i++) {
         if(groceries[i] === item){
            console.log(`found: ${item}`)
         };
        
    }
}
checkItem("eggs")

