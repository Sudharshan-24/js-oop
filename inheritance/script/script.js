class person {
    constructor(name) {
        this.name = name;
    }
    //method to return the string
    toString() {
        return (`Name of the person: ${this.name}`);
    }
}

// syntax: class childClass extends parentClass
class student extends person {
    constructor(name, id) {
        // super keyword to for calling above class constructor
        super(name);
        this.id = id;
        // super(name);
        // super(id);
    }
    toString() {
        return (`${super.toString()}, StudentId: ${this.id}. Parent's: ${this.parentName} | Phone Number: ${this.phoneNumber}.`);
    }
}

let studentOne = new student('Rina', 20);
studentOne.parentName = ('Jhon Williams, Jane Williams');
studentOne.phoneNumber = ('9898989898, 8989898989');
console.log(studentOne.toString());

let studentTwo = new student('Tina', 25);
studentTwo.parentName = ('Peter Stanley, Joe Stanley');
studentTwo.phoneNumber = ('7878787878, 8787878787');
console.log(studentTwo.toString());