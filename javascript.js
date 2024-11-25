/*let name1 = "John";
let surname = "Doe";

console.log(name1);
console.log(surname);

let age = 11;
console.log(age);

age = 54;

console.log(age);


const pi = 3.14;
pi = 10;

console.log(pi); //error




const myInt = 5;
const myFloat = 6.667;
console.log(myInt);
console.log(myFloat);

console.log(typeof myInt);
console.log(typeof myFloat);

const lotsOfDecimal = 1.766584955874648135;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

let myNumber = "74";
console.log(myNumber += 3);
console.log(typeof myNumber);

let myNumber1 = Number(myNumber) + 3;
console.log(myNumber1);
*/

const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", updateBtn);

function updateBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        txt.textContent = "The machine has started";
    } else {
        btn.textContent = "Start machine";
        txt.textContent = "The machine is stopped";
    }
}
