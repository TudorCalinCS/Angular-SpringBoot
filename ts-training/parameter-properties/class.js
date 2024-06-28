"use strict";
var testCustomer = /** @class */ (function () {
    function testCustomer(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    Object.defineProperty(testCustomer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this.firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(testCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return testCustomer;
}());
var test_customer = new testCustomer("fName", "lName");
console.log(test_customer.firstName + " " + test_customer.lastName);
