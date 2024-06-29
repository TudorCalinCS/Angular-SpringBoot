class Customers {
    firstName: string;
    lastName: string;

    constructor(paramFirst: string, paramLast: string) {
        this.firstName = paramFirst;
        this.lastName = paramLast;
    }
}

let customers = new Customers("fName", "lName");

console.log(customers.firstName + " " + customers.lastName);