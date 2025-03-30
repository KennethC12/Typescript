
// | == union
let score: number | string = 33

score = 55
score = "score"

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let ken: User | Admin = {name: "ken", id: 233}

ken = {username: "kenneth", id: 233}

//function getDbId(id: number | string) {
//    console.log(`DB id is ${id}`);
//}

getDbId(3)
getDbId("3")

function getDbId(id: number | string) {
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// Array

const data: (number | string)[] = [1, 3, 4, "2", "5"]

// You can allow this to be very strict 
let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// Since crew is not in it, it will bring up an error
// seatAllotment = "crew"