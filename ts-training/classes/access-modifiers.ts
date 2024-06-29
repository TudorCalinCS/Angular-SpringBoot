class Customer {
    private _firstName: string;
    private _lastName: string;

    constructor(paramFirst: string, paramLast: string) {
        this._firstName = paramFirst;
        this._lastName = paramLast;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this.firstName = value;
    }

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

}

let customer = new Customer("fName", "lName");

console.log(customer.firstName + " " + customer.lastName);