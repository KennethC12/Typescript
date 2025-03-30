let greetings: string = "Hello Ken";


console.log(greetings);

// number
// let userID: number; <--- This is a bad practice because typescript can infer that it is going to be a number so you dont need : number
let userID = 334455.3;

userID.toFixed();


// boolean

let isLoggedIn: boolean = false;

// any
// This is bad because it turns off the typechecking error so
// If I change this into return 5; it will allow it even though it needs to be a string
// AVOID THIS

let hero;

function getHero() {
    return "thor";
}

hero = getHero();


export {}