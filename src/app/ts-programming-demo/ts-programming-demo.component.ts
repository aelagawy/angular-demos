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
    let stringVar1:string = "Angular";
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
    console.log("// return letter in word by index: " + stringVar1[0]);
    console.log("// return letter in word by index: " + stringVar1.length);
    
    
  /* string --end */  




/* variables example */
/* number */
console.log("variables example: number");
let numericalVar:number = 0;
console.log("number var value = " + numericalVar);
numericalVar += 1; // same as numericalVar = numericalVar + 1
console.log("number var value = " + numericalVar);
numericalVar = numericalVar * 2;
console.log("number var value = " + numericalVar);
console.log("hint: default value for uninitialized boolean variable is 'false'");
console.log("-----------------------------------------------------");



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

