const User = {
    name: "ken",
    email: "@gmail.com",
    isActive: true
}

function createUser1({name: string, isPaid: boolean}){

}
// Odd behaviors
// This allows the email to be passed on even though the definition only allowed name and isPaid

let newUser = {name: "ken", isPaid: false, email: "@gmail.com"}
createUser1(newUser)


// Return object
function createCourse():{name:string, price: number}{
    return {name: "reactjs", price: 399}
}


// Type Aliases
type User1 = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User1){
    return {name: "", email: "", isActive: true}
}

createUser({name: "", email: "", isActive: true})

// READONLY And OPTIONAL

type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean;
    creditcardDetails?: number; // ? is optional
}

let myUser: User = {
    _id: "1234",
    name: "ken",
    email: "@gmail.com",
    isActive: false
}

myUser.email = "ham@gmail.com"
// This makes it so I cant modify
// myUser._id = "asd" 

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// This allows me to combine all the types
type cardDetails = cardNumber & cardDate & { 
    cvv: number
}

export {}