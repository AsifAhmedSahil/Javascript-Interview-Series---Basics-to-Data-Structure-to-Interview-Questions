const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log("click")

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    let under_w

    if( height === '' || height < 0 || isNaN(height) ){
        result.innerHTML = "Please Give a valid name"
    }
    else if( weight === '' || weight < 0 || isNaN(weight) ){
        result.innerHTML = "Please Give a valid name"
    } else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        
        if(bmi < 18.6){
            console.log("under weight")
            result.innerHTML = `
            <span> ${bmi}</span>
            <P>You are under weight</P>
            `
        } else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `
            <span> ${bmi}</span>
            <P>Your weight is in normal range</P>
            `
        } else if(bmi > 24.9){
            result.innerHTML = `
            <span> ${bmi}</span>
            <P>You are Over Weight.Please do some exercise</P>
            `
        }
    }



})