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

/*
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

//alert(5 / 2);

//alert(2 ** 2); ~ 2 ^ 2
//alert(2 ** (1/2)) ~ 2 ^ 1/2

//+ is the only operator that supports strings in such a way. Other arithmetic operator will covert to numbers
//alert(2 + 2 + "1"); ~ 41
//alert("1" + 2 + 2); ~ 122

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); //12

//if we want output is 3 we can use (Number) or prepending them with +

alert(+a + +b); // or let a = +prompt("fn", 1); let b = +prompt("sn", 2);

const bigInt = 1313614654554115614848n // n mean it's a BigInt

// There are 8 basic data types in Js: number, bigInt, string, boolean, null, undefined, symbol, object
*/

function capitalize(str) {
 if (str.length == 0){
    return str;
 }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}


console.log(capitalize("hello"));

function lastLetter(str) {
    if (str.length == 0) {
        return str;
    }
    return str.slice(str.length -1);
}

console.log(lastLetter("abcdafjkalalkfjhgajkh"));