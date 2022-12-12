class person {
    constructor(name, id, phnNo) {
        this.name = name;
        this.id = id;
        this.phnNo = phnNo;
    }
    addRole(add) {
        this.add = add;
    }
    addCity(city) {
        this.city = city;
    }
    getDetails() {
        console.log(`Name is ${this.name}, Role is ${this.add}. And he lives in ${this.city}.`);
    }
}
let personOne = new person('Sudharshan', '24');
personOne.addRole('Full Stack Developer');
personOne.addCity('Sholinghur');
personOne.getDetails();