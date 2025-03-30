"use strict";
// If :number isnt there the function turns into any which is bad
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(nums) {
    return nums + 2;
    // return "hello"
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var myValue = addTwo(5);
getUpper("4");
signUpUser("name", "@gmail.com", true);
loginUser("h", "h@gmail.com");
//function getValue(myVal: number):boolean {
//    if (myVal > 5) {
//        return true
//    }
//    return "200"
//}
// Basics of adding a var in the =>
var getHello = function (s) {
    return "";
};
// Typescript map is smart enough to know if it is a string or numbers or even booleans
var heros = [1, 2, 3];
// const heros = ["thor", "spiderman", "ironman"]
heros.map(function (hero) {
    return "hero is ".concat(hero);
});
// Console Error
function consoleError(errmsg) {
    console.log(errmsg);
}
// Handle Error
function handleError(errmsg) {
    throw new Error(errmsg);
}
// Never 
// Some functions never return a value
function fail(msg) {
    throw new Error(msg);
}
