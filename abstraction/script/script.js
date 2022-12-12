function person(fname, lname) {
    let firstName = fname;
    let lastName = lname;
    let get_noAccess = function () {
        return (`First Name: ${firstName}, Last Name: ${lastName}`);
    }
    this.get_access = function () {
        return (`First Name: ${firstName}, Last Name: ${lastName}`);
    }
}

let personOne = new person('Sudharshan', 'S');
console.log(personOne.firstName);
console.log(personOne.get_access());
console.log(personOne.get_noAccess);

let personTwo = new person('Marshall', 'Mathers');
console.log(personTwo.lastName);
console.log(personTwo.get_access());


function employee(empName, empAge, empSalary) {
    this.employeeName = empName;
    this.employeeAge = empAge;
    this.employeeSalary = empSalary;

    let monthlyBonus = 10000;
    let calculateFinalSalary = function () {
        let finalSalary = empSalary + monthlyBonus;
        console.log(`Final salary is ${finalSalary}.`);
    }
    this.getEmployeeDetails = function () {
        console.log(`Name is ${this.employeeName}. Age is ${this.employeeAge}. Role is ${this.employeeRole}.`);
        calculateFinalSalary();
    }
}

let employeeOne = new employee('Joe', 25, 50000);
employeeOne.employeeRole = 'Software Testing';
employeeOne.getEmployeeDetails();

let employeeTwo = new employee('Sarah', 30, 200000);
employeeTwo.employeeRole = 'Full Stack Developer';
employeeTwo.getEmployeeDetails();

let employeeThree = new employee('Sean', 35, 500000);
employeeThree.employeeRole = 'Data Scientist';
employeeThree.getEmployeeDetails();