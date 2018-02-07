"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @class Employee
 */
var Employee = /** @class */ (function () {
    // Abstraction from interface 
    function Employee(employeeOptions) {
        this._employeeOptions = employeeOptions;
        return this;
    }
    Employee.prototype.getId = function () {
        return this._employeeOptions.id;
    };
    //   getName();
    Employee.prototype.getName = function () {
        return this._employeeOptions.name;
    };
    Employee.prototype.getPay = function (arg) {
        return !arg ? this._employeeOptions.pay : this._employeeOptions.pay + arg;
    };
    Employee.prototype.getAge = function () {
        return this._employeeOptions.age;
    };
    Employee.prototype.getState = function () {
        return this._employeeOptions.state;
    };
    Employee.prototype.getJob = function () {
        return this._employeeOptions.job;
    };
    Employee.prototype.createEmployee = function () {
        return this._employeeOptions;
    };
    return Employee;
}());
/**
 *
 *
 * @class Manager
 * @extends {Employee}
 *
 *
 */
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(options) {
        var _this = _super.call(this, options) || this;
        _this.type = options.type;
        return _this;
    }
    Manager.prototype.getRole = function () {
        return 'Title of the job role is : ' + this.type + ' Manager';
    };
    Manager.prototype.getJob = function () {
        return 'Title of the job role is : ' + _super.prototype.getJob.call(this);
    };
    Manager.prototype.getPaid = function () {
        return _super.prototype.getPay.call(this);
    };
    /* Method overloading is the action of defining multiple methods with the same name, but with different parameters.*/
    Manager.prototype.getPay = function (bonus) {
        return !bonus ? _super.prototype.getPay.call(this) : _super.prototype.getPay.call(this) + bonus;
    };
    return Manager;
}(Employee));
// Inheritance
var Cleaner = /** @class */ (function (_super) {
    __extends(Cleaner, _super);
    function Cleaner(options) {
        return _super.call(this, options) || this;
    }
    Cleaner.prototype.getJob = function () {
        return 'Title of the job role is : ' + _super.prototype.getJob.call(this);
    };
    return Cleaner;
}(Employee));
var newEmployeeOptions = {
    id: 5,
    name: 'Bola',
    pay: 100000,
    job: 'Director',
    age: 45,
    state: 'Oyo',
    type: 'Executive'
};
var newManager = new Manager(newEmployeeOptions);
var newEmployee = new Employee(newEmployeeOptions);
console.log(newManager.getRole());
console.log(newEmployee.getJob());
console.log(newManager.getPay());
console.log(newManager.getState()); // Manager can use Employee methods and can use Manager methods
console.log(newManager.getPay(50000));
