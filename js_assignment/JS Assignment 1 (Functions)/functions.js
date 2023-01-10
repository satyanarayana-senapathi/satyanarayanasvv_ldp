//1  Write a program to demonstrate how a function can be passed as a parameter to another function.
function greet() {
    return 'Hello';
}
function name(user, func)
{
    const message = func();
    console.log(`${message} ${user}`);
}
name('lavanya', greet);
name('srinivas', greet);
name('akash', greet);



//2  An arrow function takes two arguments firstName and lastName and returns a 2 letter string that represents
// the first letter of both the arguments. For the arguments Roger and Waters, the function returns ‘RW’. Write this function.
//Submit the github link to the code
var prompt = require('prompt-sync')();
var firstname = prompt('Enter First Name ');
var secondname = prompt('Enter second Name ');
var first_letters=(firstname,secondname) => firstname[0]+secondname[0];
console.log(first_letters(firstname,secondname));
