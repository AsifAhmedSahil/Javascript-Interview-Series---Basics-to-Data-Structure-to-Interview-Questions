
const promise = new Promise(function(resolve,reject){
    setTimeout(() => {
            console.log("hi")
            resolve()
    }, 1000);

})

promise.then(function(){
    console.log("after promise complete")
})

// ------------------promise 2

new Promise(function(resolve,reject){
    console.log("Async task")
    resolve()
}).then(function(){
    console.log("Async task completed!")
})

// -------- data consumption with promises

const threepromises = new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("resolve call")
        resolve({username:"asif"})
    }, 1000);
})

threepromises.then(function(user){
    console.log(user)
})


// ---------promise four ----------

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"asif"})
        }
        else{
            reject("Error:Something went wrong!")
        }
    }, 1000);

})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch((error)=>{console.log(error)}).finally(()=>{
    console.log("Finally resolve or rejected!")
})

// ---------handle error gracefully with async / await -------------------

const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error){
            resolve({username:"javascript"})
        }
        else{
            reject("Error:JS went wrong!")
        }
    }, 1000);
})

async function consumePromiseFive(){
    try {
        const response = await PromiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }

}

consumePromiseFive()