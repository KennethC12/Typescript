
// I want this to be in a strict order --> string, number, boolean
let users: [string, number, boolean]

users = ["hs", 123, true]

let rgb: [number, number, number] = [255, 123, 122]

type Users = [number, string]

const newUsers: Users = [11, "gmail.com"]

newUsers[1] = ".com"
// This can now catch if and error in the array
// newUsers.push(true)