"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "ken",
    email: "@gmail.com",
    isActive: true
};
function createUser1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// Odd behaviors
// This allows the email to be passed on even though the definition only allowed name and isPaid
var newUser = { name: "ken", isPaid: false, email: "@gmail.com" };
createUser1(newUser);
// Return object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
function createUser(user) {
    return { name: "", email: "", isActive: true };
}
createUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1234",
    name: "ken",
    email: "@gmail.com",
    isActive: false
};
myUser.email = "ham@gmail.com";
