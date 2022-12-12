// defining class using es6
class vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`);
    }
}
// using object with the help of the constructor
let bike1 = new vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new vehicle('Street Triple RS', 'Triumph', '765cc');
console.log(bike1.name);
console.log(bike2.maker);
console.log(bike2.getDetails());