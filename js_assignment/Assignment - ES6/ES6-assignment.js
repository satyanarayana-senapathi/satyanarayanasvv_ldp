

const printName = name => "Hi " + name;

console.log(printName("satyanarayana"));


const printBill = (name, bill) => `Hi ${name}, please pay: ${bill}`;

console.log(printBill("satyanarayana", 1000));



const person = {
    names: "Noam Chomsky",
    age: 92
};

let { names, age } = person;
console.log(names);
console.log(age);