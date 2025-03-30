// If :number isnt there the function turns into any which is bad

function addTwo(nums: number): number {
    return nums + 2
    // return "hello"
}

function getUpper(val: string) {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}



let myValue = addTwo(5)
getUpper("4")

signUpUser("name","@gmail.com",true)
loginUser("h", "h@gmail.com")



//function getValue(myVal: number):boolean {
//    if (myVal > 5) {
//        return true
//    }
//    return "200"
//}

// Basics of adding a var in the =>
const getHello = (s: string):string => {
    return ""
}

// Typescript map is smart enough to know if it is a string or numbers or even booleans
const heros = [1,2,3]
// const heros = ["thor", "spiderman", "ironman"]

heros.map((hero) => {
    return `hero is ${hero}`
})


// Console Error
function consoleError(errmsg: string): void {
    console.log(errmsg);

}

// Handle Error
function handleError(errmsg: string): never {
    throw new Error(errmsg);    
}

// Never 
// Some functions never return a value
function fail(msg: string): never{
    throw new Error(msg);
}


export {}