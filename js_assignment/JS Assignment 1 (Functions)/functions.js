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


let prompt = require('prompt-sync')();
let firstname = prompt('Enter First Name ');
let secondname = prompt('Enter second Name ');
let first_letters=(firstname,secondname) => firstname[0]+secondname[0];
console.log(first_letters(firstname,secondname));
