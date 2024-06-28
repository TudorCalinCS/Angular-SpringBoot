"use strict";
var Customer = /** @class */ (function () {
    function Customer(paramFirst, paramLast) {
        this._firstName = paramFirst;
        this._lastName = paramLast;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var customer = new Customer("fName", "lName");
console.log(customer.firstName + " " + customer.lastName);
