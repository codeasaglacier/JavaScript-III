/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. If the function is in the global scope, "this" will be a window object.
 * 2. If the function is preceded by a ".", the object before it is "this".
 * 3. If a constructor function is used, "this" refers to the object created.
 * 4. If .call or .apply are used, the first argument defines "this".
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
function saysHi(name) {
    console.log('Hi ' + name);
    console.log(this);
}
saysHi(Elan);
// Principle 2

// code example for Implicit Binding
let bakeChicken = {
    mysteryIngredient: 'Ginger ',
    bake: function (chicken) {
        console.log(this.mysteryIngredient + chicken);
        console.log(this);
    }
}
bakeChicken.bake(goldenChicken);

// Principle 3

// code example for New Binding
function makeCuttingboard(wood) {
    this.wood = wood;
    this.type = " Cutting board";
    this.project = function () {
        console.log(this.wood + this.type);
        console.log(this);
    }
};
let makeMaple = new makeCuttingboard("Maple");
let makeFeatherwood = new makeCuttingboard("Featherwood");

makeMaple.project();
makeFeatherwood.project();
//////////////////////////////////////////////////////////////////
// function GreetMe|makeCuttingboard|(name) {
//     this.greeting|wood| = 'Hello ';
//     this.name|type| = name;
//     this.speak|project| = function() {
//         console.log(this.greeting|wood| + this.name|type|);
//         console.log(this);
//     }
// };

// var greetJohn|makeMaple| = new GreetMe|makeCuttingboard|('John');
// var greetJane|makeFeatherwood| = new GreetMe|makeCuttingboard|('Jane');

// greetJohn.speak|project|();
// greetJane.speak|project|();

// greetJohn|makeMaple|.sayGoodbye.call(greetJane|makeMaple|);
// greetJane|makeFeatherwood|.sayGoodbye.apply(greetJohn|makeFeatherwood|);
// Principle 4

// code example for Explicit Binding
makeMaple.finishOil.call(makeMaple);
makeFeatherwood.finishOil.call(makeFeatherwood);