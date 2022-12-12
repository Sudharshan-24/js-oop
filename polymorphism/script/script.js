class Humans {
    constructor(name) {
        this.name = name;
    }
    eats() {
        console.log(this.name + ' eats food.');
    }
}

class Animals extends Humans {
    constructor(name) {
        super(name);
    }
    eats() {
        // super.eats();
        console.log(this.name + ' eats flesh animals.');
    }
}

let humans = new Humans('Humans');
humans.eats();

let tiger = new Animals('Tiger');
tiger.eats();