
import { IEmployee } from './interfaces/employee';

/**
 * 
 * @class Employee
 */
 class Employee {
    // Enscapsulation
    // Property is private making unaccessible outside the Employee scope
    private _employeeOptions: IEmployee;
// Abstraction from interface 
  constructor(employeeOptions: IEmployee) {
      this._employeeOptions = employeeOptions;
      return this;
  }
  getId() {
      return this._employeeOptions.id;
  }
//   getName();
  getName() {
      return this._employeeOptions.name;
  }

   /* Method overloading is the action of defining multiple methods with the same name, but with different parameters.*/
  getPay();
  getPay(payBonus?: number) 
  getPay(arg?) {
      return !arg ? this._employeeOptions.pay : this._employeeOptions.pay + arg;
  }
  getAge() {
      return this._employeeOptions.age;
  }
  getState() {
      return this._employeeOptions.state;
  }
  getJob() {
      return this._employeeOptions.job;
  }

 createEmployee() {
      return this._employeeOptions;
  }

}

/**
 * 
 * 
 * @class Manager
 * @extends {Employee}
 * 
 * 
 */
class Manager extends Employee {
  type: string;
  constructor(options) {
      super(options);
      this.type = options.type;
  }

  getRole() {
      return 'Title of the job role is : ' + this.type + ' Manager';
  }

  getJob() {
      return 'Title of the job role is : ' + super.getJob();
  }

  getPaid() {
      return super.getPay()
  }
 /* Method overloading is the action of defining multiple methods with the same name, but with different parameters.*/
  
 getPay(bonus?:number){
    return !bonus ? super.getPay() : super.getPay() + bonus 
  }

}

// Inheritance
class Cleaner extends Employee {

  constructor(options) {
      super(options);
  }

  getJob() {
      return 'Title of the job role is : ' + super.getJob();
  }

}

const newEmployeeOptions = {
    id: 5, 
    name: 'Bola', 
    pay: 100000, 
    job: 'Director', 
    age: 45, 
    state: 'Oyo', 
    type: 'Executive'
}

let newManager = new Manager(newEmployeeOptions);


let newEmployee = new Employee(newEmployeeOptions);

console.log(newManager.getRole());

console.log(newEmployee.getJob());

console.log(newManager.getPay());

console.log(newManager.getState()); // Manager can use Employee methods and can use Manager methods as he/she belongs to both classes


console.log(newManager.getPay(50000));


