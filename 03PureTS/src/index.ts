// class User {
//     public email: string
//     name: string
//     private readonly city: string = "Boston"
//     constructor(email: string, name: string) {
//         this.email = email;
//         this.name = name
//     }
// }

class User {

    protected _courseCount = 1

    readonly city = "Boston"
    constructor(
        public email: string,
        public name: string,
    ) {
    }
    private deleteToken() {
        console.log("Token delete");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`
    }

    get courseCount(): number {
        return this._courseCount
    }

    set courseCount(courseNum){ // can not add any variable even void
        if (courseNum <= 1) {
            throw new Error("Course count show be more than 1")
        }
        this._courseCount = courseNum
    }
}

class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount() {
        this._courseCount = 4
    }
}

const ken = new User("@gmail.com", "ken")
// ken.city = "boston"

// ken.deleteToken()