class User {
    constructor(email,password){
        this.email = email;
        this.password = password

    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }
}

const sahil =new User("asif@gmail.com","123")
console.log(sahil.email)