import { namespaceHTML } from "@angular/core/src/render3";

namespace Functions {
    // Named function
    function add1(x, y) {
        return x + y;
    }
    function add2(x: number, y: number): number { // Typed functions
        return x + y;
    }

    // Anonymous function
    let myAdd1 = function(x, y) { return x + y; };
    let myAdd2 = function(x: number, y: number): number { return x + y; }; // Typed functions
    let myAdd3: (baseValue: number, increment: number) => number = function(x: number, y: number): number { return x + y; };

    let z = 100;
    function addToZ(x, y) {
        return x + y + z;
    }

    
    
}

namespace Functions.OptionalAndDefaultParameters {
    // optional paramters must come later, however default parameters can come at any order

    // example: 1
    function buildName1(firstName: string, lastName: string) {
        return firstName + " " + lastName;
    }
    
    let result1a = buildName1("Bob");                  // error, too few parameters
    let result2a = buildName1("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3a = buildName1("Bob", "Adams");         // ah, just right

    // example: 2
    function buildName2(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    
    let result1b = buildName2("Bob");                  // works correctly now
    let result2b = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3b = buildName2("Bob", "Adams");         // ah, just right

    // example: 3
    function buildName3(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }
    
    let result1c = buildName3("Bob");                  // works correctly now
    let result2c = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3c = buildName3("Bob", "Adams");         // ah, just right
}

namespace Functions.RestParameters {
    //example: 1
    function buildName1(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");

    // example: 2
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }
    let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;
}

namespace Functions.ThisAndArrowFunctions {
    interface Card {
        suit: string;
        card: number;
    }
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        createCardPicker: function() {
            return () => { /* function() { // arrow function will fix this scope to get scope of creation instead of scope of invoke */
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
    
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);
}

var example = {
    name: 'Example',
    id: 5,
    collection: ['a', 'b', 'c']
   }

   var example: {
    name: string;
    id: number;
    collection: string[];
   } = {
    name: 'Example',
    id: 5,
    collection: ['a', 'b', 'c']
   }

   
    module Shapes {
        export interface IPoint {
            getDist(): number;
        }
        export class Point implements IPoint {
            static origin = new Point(0, 0);
            constructor(public x: number, public y: number) { }

            getDist() {
                return Math.sqrt(this.x * this.x + this.y * this.y);
            }
        }
    }
    var point = new Shapes.Point(50, 243);
    var dist = point.getDist();
    

    // try {
    //     if (true) {
    //     throw (new ExampleError('An error has occurred.'));
    //     }
    //    } catch (error) {
    //     switch (error.name) {
    //     case 'ExampleError':
    //     alert(error.message);
    //     break;
    //     default:
    //     throw error;
    //     }
    //    }
       