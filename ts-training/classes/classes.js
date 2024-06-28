"use strict";
var Customer = /** @class */ (function () {
    function Customer(paramFirst, paramLast) {
        this.firstName = paramFirst;
        this.lastName = paramLast;
    }
    return Customer;
}());
var customer = new Customer("fName", "lName");
console.log(customer.firstName + " " + customer.lastName);
