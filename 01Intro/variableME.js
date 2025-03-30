"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var greetings = "Hello Ken";
console.log(greetings);
// number
// let userID: number; <--- This is a bad practice because typescript can infer that it is going to be a number so you dont need : number
var userID = 334455.3;
userID.toFixed();
// boolean
var isLoggedIn = false;
// any
// This is bad because it turns off the typechecking error so
// If I change this into return 5; it will allow it even though it needs to be a string
// AVOID THIS
var hero;
function getHero() {
    return "thor";
}
hero = getHero();
