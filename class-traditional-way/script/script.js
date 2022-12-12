// defining class in traditional way
function vehicle(name, maker, type) {
    this.name = name;
    this.maker = maker;
    this.type = type;
};
vehicle.prototype.getDetails = function () {
    console.log('The name of the car is ' + this.name);
};
let car1 = new vehicle('GTR', 'Nissan', 'Grand Tourer');
let car2 = new vehicle('7 Series', 'BMW', 'Sedan');
console.log(car1.type);
console.log(car2.name);
console.log(car1.getDetails());