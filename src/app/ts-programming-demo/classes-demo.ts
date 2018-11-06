module Classes {

    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    
    let greeter = new Greeter("world");

}

module Inheritance {

    //basic example
    class Animal1 {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }
    
    class Dog extends Animal1 {
        bark() {
            console.log('Woof! Woof!');
        }
    }
    
    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();


    // complex example 
    class Animal2 {
        name: string;
        constructor(theName: string) { this.name = theName; }
        move(distanceInMeters: number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
    
    class Snake extends Animal2 {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }
    
    class Horse extends Animal2 {
        constructor(name: string) { super(name); }
        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }
    
    let sam = new Snake("Sammy the Python");
    let tom: Animal2 = new Horse("Tommy the Palomino");
    
    sam.move();
    tom.move(34);

}

namespace AccessModifiers.Public {
    class Animal {
        public name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }
}

namespace AccessModifiers.Private {
    // basic example
    class Animal1 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    
    //new Animal1("Cat").name; // Error: 'name' is private;

    // advanced example
    class Animal2 {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    
    class Rhino extends Animal2 {
        constructor() { super("Rhino"); }
    }
    
    class Employee {
        private name: string;
        constructor(theName: string) { this.name = theName; }
    }
    
    let animal = new Animal2("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");
    
    animal = rhino;
    //animal = employee; // Error: 'Animal' and 'Employee' are not compatible
}

namespace AccessModifiers.Protected {
    // basic example
    class Person1 {
        protected name: string;
        constructor(name: string) { this.name = name; }
    }
    
    class Employee1 extends Person1 {
        private department: string;
    
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    
        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    
    let mark = new Employee1("Mark", "Sales");
    console.log(mark.getElevatorPitch());
    //console.log(mark.name); // error


    class Person2 {
        protected name: string;
        protected constructor(theName: string) { this.name = theName; }
    }
    
    // Employee can extend Person
    class Employee extends Person2 {
        private department: string;
    
        constructor(name: string, department: string) {
            super(name);
            this.department = department;
        }
    
        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }
    
    let howard = new Employee("Howard", "Sales");
    //let john = new Person2("John"); // Error: The 'Person' constructor is protected
}

namespace AccessModifiers.ReadOnly {
    // example: 1
    class Octopus1 {
        readonly name: string;
        readonly numberOfLegs: number = 8;
        constructor (theName: string) {
            this.name = theName;
        }
    }
    let dad = new Octopus1("Man with the 8 strong legs");
    //dad.name = "Man with the 3-piece suit"; // error! name is readonly.

    // example: 2
    class Octopus2 {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
}

namespace Classes.Accessors {
    // basic example
    class Employee1 {
        fullName: string;
    }
    
    let employee1 = new Employee1();
    employee1.fullName = "Bob Smith";
    if (employee1.fullName) {
        console.log(employee1.fullName);
    }

    // advanced example
    let passcode = "secret passcode";

    class Employee2 {
        private _fullName: string;
    
        get fullName(): string {
            return this._fullName;
        }
    
        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }
    
    let employee2 = new Employee2();
    employee2.fullName = "Bob Smith";
    if (employee2.fullName) {
        console.log(employee2.fullName);
    }
}

namespace Classes.StaticProperties {
    class Grid {
        static origin = {x: 0, y: 0};
        calculateDistanceFromOrigin(point: {x: number; y: number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }
        constructor (public scale: number) { }
    }
    
    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale
    
    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));
}

namespace Classes.Abstract {
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log("roaming the earth...");
        }
    }

    abstract class Department {

        constructor(public name: string) {
        }
    
        printName(): void {
            console.log("Department name: " + this.name);
        }
    
        abstract printMeeting(): void; // must be implemented in derived classes
    }
    
    class AccountingDepartment extends Department {
    
        constructor() {
            super("Accounting and Auditing"); // constructors in derived classes must call super()
        }
    
        printMeeting(): void {
            console.log("The Accounting Department meets each Monday at 10am.");
        }
    
        generateReports(): void {
            console.log("Generating accounting reports...");
        }
    }
    
    let department: Department; // ok to create a reference to an abstract type
    //department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    //department.generateReports(); // error: method doesn't exist on declared abstract type
}

namespace Classes.ConstructorInit {
    //example: 1
    class Greeter1 {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }
    
    let greeter1: Greeter1;
    greeter1 = new Greeter1("world");
    console.log(greeter1.greet());

    //example: 2
    class Greeter2 {
        static standardGreeting = "Hello, there";
        greeting: string;
        constructor(greeting? :string){ 
            if (greeting) 
                this.greeting = greeting; 
        }
        greet() {
            if (this.greeting) {
                return "Hello, " + this.greeting;
            }
            else {
                return Greeter2.standardGreeting;
            }
        }
    }
    
    let greeter2a: Greeter2;
    greeter2a = new Greeter2();
    console.log(greeter2a.greet());

    let greeter2b: Greeter2;
    greeter2b = new Greeter2("Custom Greet");
    console.log(greeter2b.greet());

    let greeterMaker: typeof Greeter2 = Greeter2;
    greeterMaker.standardGreeting = "Hey there!";
    
    let greeter2c: Greeter2 = new greeterMaker();
    console.log(greeter2c.greet());
}