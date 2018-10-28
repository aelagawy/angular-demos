import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ts-programming-demo',
  templateUrl: './ts-programming-demo.component.html',
  styleUrls: ['./ts-programming-demo.component.less']
})
export class TsProgrammingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

/* This code is written in TypeScript v^3.1.3 and ECS6, and will only use the 'console' object as an output to demonstrate basic programming features */
console.log("This code is written in TypeScript v^3.1.3 and ECS6, and will only use the 'console' object as an output to demonstrate basic programming features");
/* Written by Ahmad El-Agawy @25-10-2018 */
console.log("Written by Ahmad El-Agawy @25-10-2018");
console.log("-----------------------------------------------------");
console.log("BEST OF LUCK");
console.log("-----------------------------------------------------");

/* variables examples */

  /* boolean --start */

    console.log("variables example: boolean");
    let _booleanVar:boolean;
    let booleanVar:boolean = false;
    console.log("_booleanVar value = " + _booleanVar);
    console.log("booleanVar value = " + booleanVar);
    booleanVar = 1 === 1  // expression evalutes to 'true'
    console.log("booleanVar value = " + booleanVar);
    console.log("// hint: boolean value will always resolve either as 'true' or 'false'");
    console.log("-----------------------------------------------------");

  /* boolean --end */

  /* string --start */

    console.log("variables example: string");
    let stringVar0:string;
    let stringVar1:string = "   Angular.ng   ";
    let stringVar2:string = "Application";
    let stringVar3:string = "Demo";
    console.log("stringVar0 value = " + stringVar0);
    console.log("stringVar1 value = " + stringVar1);
    console.log("stringVar2 value = " + stringVar2);
    console.log("stringVar3 value = " + stringVar3);
    console.log("");    
    console.log("// concatenation example:");
    console.log("// approach 1 => " + "This should be an " + stringVar1 + " " + stringVar2 + ", we will use for " + stringVar3 + " purposes.");    
    console.log("// approach 2 => " + `This should be an ${ stringVar1 } ${ stringVar2 }, we will use for ${ stringVar3 } purposes.`);    
    console.log("// string functions examples:");
    console.log("// return letter in word by index | syntax: stringVar1[7] | value: " + stringVar1[7]);
    console.log("// return length of string | syntax: stringVar1.length | value: " + stringVar1.length);
    console.log("// return index of letter or word inside string | syntax: stringVar1.indexOf('g') | value: " + stringVar1.indexOf('g'));
    console.log("// check if string contain string | syntax: stringVar1.includes('r') | value: " + stringVar1.includes('r'));
    console.log("// check if string starts with string | syntax: stringVar1.startsWith('A') | value: " + stringVar1.startsWith('A'));
    console.log("// check if string ends with string | syntax: stringVar1.endsWith('A') | value: " + stringVar1.endsWith('A'));
    console.log("// return repeated count of string | syntax: stringVar1.repeat(5) | value: " + stringVar1.repeat(5));
    console.log("// return a substring from a string (start => end) | syntax: stringVar1.substring(2,4) | value: " + stringVar1.substring(2,4));
    console.log("// return a substring from a string (start => end) | syntax: stringVar1.slice(2,4) | value: " + stringVar1.slice(2,4));
    console.log("// split string by char | syntax: stringVar1.split('.') | value: " + stringVar1.split('.'));
    console.log("// return string in lowercase | syntax: stringVar1.toLowerCase() | value: " + stringVar1.toLowerCase());
    console.log("// return string in uppercase | syntax: stringVar1.toUpperCase() | value: " + stringVar1.toUpperCase());
    //console.log("// removes spaces from left of string | syntax: stringVar1.trimLeft() | value: " + stringVar1.trimLeft());
    //console.log("// removes spaces from right of string | syntax: stringVar1.trimRight() | value: " + stringVar1.trimRight());
    console.log("// removes spaces from left and right string | syntax: stringVar1.trim() | value: " + stringVar1.trim());
    console.log("-----------------------------------------------------");
 
  /* string --end */  

  /* number --start */  

  let [test1,test2,test3,test4] = ["d",1,true,undefined];
  console.log(test1,test2,test3,test4);

  let [, second, , fourth] = [1, 2, 3, 4];
console.log(second,fourth);

  let [first, ...rest] = ["d",1,true,undefined];
  console.log(first,rest);

    console.log("variables example: number");
    let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let x: [string, number]; //Tuple
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

function isNumber(x: any): x is number {
  return typeof x === "number";
}

function isString(x: any): x is string {
  return typeof x === "string";
}

console.log(isString(1));

function padLeft(value: string, padding: string | number) {
  if (isNumber(padding)) {
      return Array(padding + 1).join(" ") + value;
  }
  if (isString(padding)) {
      return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}




interface Padder {
  getPaddingString(): string
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) { }
  getPaddingString() {
      return Array(this.numSpaces + 1).join(" ");
  }
}

class StringPadder implements Padder {
  constructor(private value: string) { }
  getPaddingString() {
      return this.value;
  }
}

function getRandomPadder() {
  return Math.random() < 0.5 ?
      new SpaceRepeatingPadder(4) :
      new StringPadder("  ");
}

// Type is 'SpaceRepeatingPadder | StringPadder'
let padder: Padder = getRandomPadder();

if (padder instanceof SpaceRepeatingPadder) {
  padder; // type narrowed to 'SpaceRepeatingPadder'
}
if (padder instanceof StringPadder) {
  padder; // type narrowed to 'StringPadder'
}


type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;  // "string"
type T2 = TypeName<true>;  // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;  // "object"

let list: Array<number> = [1, 2, 3];


    let numericalVar:number = 0;
    console.log("number var value = " + numericalVar);
    numericalVar += 1; // same as numericalVar = numericalVar + 1
    console.log("number var value = " + numericalVar);
    numericalVar = numericalVar * 2;
    console.log("number var value = " + numericalVar);
    console.log("hint: default value for uninitialized boolean variable is 'false'");
    console.log("-----------------------------------------------------");

  /* number --end */  
  class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @configurable(false)
    get x() { return this._x; }

    @configurable(false)
    get y() { return this._y; }
}

function configurable(value: boolean) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      descriptor.configurable = value;
  };
}


// structing a new class
class Employee{

  //1. Approach (1)
  fullName: string;
  age: number;
  yearsOfExp: number;

  constructor(_fullName?: string, _age?: number, _yearsOfExp?: number){
    this.fullName = _fullName;
    this.age = _age;
    this.yearsOfExp = _yearsOfExp;
  }



  // //2. Approach (2)
  // constructor(public fullName: string, public age: number, public yearsOfExp: number){

  // }
}

let y = (b: number, s: string) => 0;


interface SearchFunc {
  (source: string, subString: string): boolean;
}

let myFunc: SearchFunc = (source, subString) => {
  return true;
}

let Greeter = (function () {
  function Greeter(message) {
      this.greeting = message;
      this.test = "test";
  }
  Greeter.prototype.greet = function () {
      return "Hello, " + this.greeting + " - " + this.test;
  };
  return Greeter;
})();

let greeter;
greeter = new Greeter("world");
console.log(greeter.greet());


let greeterMaker: typeof Greeter = Greeter;

let myAdd: (x: number, y: number) => number =
    function(x: number, y: number): number { return x + y; };

    
function buildName(firstName: string, ...restOfName: any[]) {
    return firstName + " " + restOfName.join(" ");
}
  
  let buildNameFun: (fname: string, ...rest: any[]) => string = buildName;
  console.log(buildNameFun("ahmed","mostafa",1,true));



function identity<T>(arg: T): T {
  return arg;
}

console.log(identity<string>("t"))

function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let _x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(_x, "a"); // okay
//getProperty(_x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.


  let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
//alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
//alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);


// creating class objects (Instantiation)
// 1.Approach (1){
let balamita = <Employee>({
  fullName : "ahmed mostafa",
  age : 28,
  yearsOfExp : 5
});

// 2.Approach (2)
let agawy = new Employee("ahmed elagawy", 31, 6);

// 3.Approach (3)
let ibrahim = new Employee();
ibrahim.fullName = "ibrahim ahmed";
ibrahim.age = 40;
ibrahim.yearsOfExp = 15;

// array of objects
let employees: Employee[] = [
  balamita,
  agawy,
  ibrahim
];

let stringMessage1: string = "my name is " + balamita.fullName + " and I'm " + balamita.age + " years old and I've " + balamita.yearsOfExp + " years of exp.";
let stringMessage2: string = `my name is ${employees[1].fullName} and I'm ${employees[1].age} years old
and I've ${employees[1].yearsOfExp} years of exp.`;

console.log(stringMessage1);
console.log(stringMessage2);
console.log("-----------------------------------------------------");

console.log("loop example ...");
console.log("1.Approach (1)");
// 1.Approach (1)
for(let e of employees){
  let message: string = `my name is ${e.fullName} and I'm ${e.age} years old
  and I've ${e.yearsOfExp} years of exp.`;

  console.log(message);  
}
console.log("-----------------------------------------------------");

console.log("2.Approach (2)");
// 2.Approach (2)
for (let i = 0; i < employees.length; i++) {
  let message: string = `my name is ${employees[i].fullName} and I'm ${employees[i].age} years old
  and I've ${employees[i].yearsOfExp} years of exp.`;

  console.log("current index is: " + i + ", mesaage content: " + message);  
}
console.log("-----------------------------------------------------");

function getDayNameV1(dayNumber: number){
  let weekDays:string[] = ["sat", "sun","mon", "tue", "wed", "thu", "fri"];

  return weekDays[dayNumber + 1];
};

function getDayNameV2(dayNumber: number){
  let weekDays:string[] = ["sat", "sun","mon", "tue", "wed", "thu", "fri"];

  if(dayNumber > 0 && dayNumber <= weekDays.length){
    return weekDays[dayNumber + 1];
  }
  else{
    return "out of range error !";
  }
};

function getDayNameV3(dayNumber: number){
  let weekDays:string[] = ["sat", "sun","mon", "tue", "wed", "thu", "fri"];

  // 1.Approach (1)
  if(dayNumber > 0 && dayNumber <= weekDays.length)
    return weekDays[dayNumber + 1];
  return "out of range error !";

  // // 2.Approach (2)
  //return (dayNumber > 0 && dayNumber <= weekDays.length) ? weekDays[dayNumber + 1] : "out of range error !";
};

let getDayNameV4 = (dayNumber: number) => {
  let weekDays:string[] = ["sat", "sun","mon", "tue", "wed", "thu", "fri"];

  // // 1.Approach (1)
  // if(dayNumber > 0 && dayNumber <= weekDays.length)
  //   return weekDays[dayNumber + 1];
  // return "out of range error !";

  // 2.Approach (2)
  return (dayNumber > 0 && dayNumber <= weekDays.length) ? weekDays[dayNumber + 1] : "out of range error !";
};

let weekDay = 8;
console.log("function getDayNameV1: " + getDayNameV1(weekDay));
console.log("function getDayNameV2: " + getDayNameV2(weekDay));
console.log("function getDayNameV3: " + getDayNameV3(weekDay));
console.log("function getDayNameV4: " + getDayNameV4(weekDay));

