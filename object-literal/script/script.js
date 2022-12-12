// using an object literal
let person = {
    first_name: 'Sudharshan',
    last_name: 'S',
    // method
    getFunction: function () {
        return (`The name of the person is ${person.first_name} ${person.last_name}`)
    },
    // object within object
    phone_number: {
        mobile: '9876543210',
        landline: '2345'
    }
};
console.log(person.getFunction());
console.log(person.phone_number.landline);