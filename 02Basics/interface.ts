// Interface is a basic protocal

interface User2 {
    readonly dbId: number
    email: string,
    userId: number
    googleId?: string
    // startTrial: () => string
    startTrial(): string
    getCoupon(couponname: string, value: number): number

}
// Reopening of interface
interface User2 {
    githubToken: string
}

interface ADMIN extends User2 {
    role: "admin" | "ta" | "learner"
}

const hitesh: ADMIN = {
    dbId: 22, 
    email: ".com", 
    userId: 2222, 
    role: "admin",
    githubToken: "github", 
    startTrial: () => {
        return "Trial Started"
    },

    getCoupon: (name: "name", off: 10) => {
        return 10
    }
}