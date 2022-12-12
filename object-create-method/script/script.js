// using Object.create() method
const developer = {
    isStudying: false,
    printIntro: function () {
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}. And my age is ${this.age}.`);
    }
};

const singer = {
    printSinger: function () {
        console.log(`He is ${this.name_two}. Since he was a great ${this.career} in the world. Currently he was rapping? ${this.isRapping}.`)
    }
};
// Object.create() method
const myself = Object.create(developer);
// 'name' is a property set on 'myself', but not on 'developer'
myself.name = 'Sudharshan';
myself.age = '24';
// inherited properties can be overwritten
myself.isStudying = true;
myself.printIntro();

const singers = Object.create(singer);
singers.name_two = 'Eminem';
singers.career = 'Rapper';
singers.isRapping = true;
singers.printSinger();