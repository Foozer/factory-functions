//Factory function

const personFactory = (name, age) => {
    const sayHello = () => console.log(`Hello, ${name}!`);
    return {name, age, sayHello }; //note after shorthand no need for 'name: name, age: age'
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

// Same as above but done with constructor pattern

const Person = function(name, age) {
    this.sayHello = () => console.log('hello!');
    this.name = name;
    this.age = age;
};

const pete = new Person('pete', 28);


const name = "Maynard";
const color = "red";
const number = 34;
const food = "rice";

console.log(name, color, number, food);

console.log({name, color, number, food});


const myFunction = function () {
    console.log(this); // this = global, [object Window]
  };
myFunction();
  
const myObject = {};
myObject.myMethod = function () {
  console.log(this); // this = Object { myObject }
};

const nav = document.querySelector('.nav'); // <nav class="nav">
const toggleNav = function () {
  console.log(this); // this = <nav> element
};
nav.addEventListener('click', toggleNav, false);


const FactoryFuntion = string => {
    const capitalizeString = () => string.toUpperCase();
    const printString = () => console.log(`----${capitalizeString()}----`);
    return { printString };
};

const taco = FactoryFuntion('taco');
/*
printString(); // ERROR!!
capitalizeString(); // ERROR!!
taco.capitalizeString(); // ERROR!!
taco.printString(); // this prints "----TACO----"
*/


const Player = (name, level) => {
    let health = level * 2;
    const getLevel = () => level;
    const getName = () => name;
    const die = () => {
        console.log('die!');
    };
    const damage = x => {
        health -= x;
        if (health <= 0) {
            die();
        }
    };
    const attack = enemy => {
        if (level < enemy.getLevel()) {
            damage(1);
            console.log(`${enemy.getName()} has damaged ${name}`);
        }
        if (level >= enemy.getLevel()) {
            enemy.damage(1);
            console.log(`${name} has damaged ${enemy.getName()}`);
        }
    };
    return {attack, damage, getLevel, getName}
};
const jimmie = Player('jim', 10);
const badGuy = Player('jeff', 5);

