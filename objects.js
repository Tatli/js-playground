// Data Types aka primitives

// String
// Number (int)
// Boolean
// Undefined
// null
// Symbol
// BigInt

// Data Structures

// Function sequence of commands, can be shared and run elsewhere
// Object unordered set of properties/functions (key:value pairings)
// Array sequence of values
// Date moment in time (ms since 1 Jan 1970)
// Error set of information about an error which occured
// RegExp regular expression, a pattern used ot match character sequences
// Map ordered set of properties (key -> value pairings), allows other key types
// Set sequence of unique values

// Objects
// Objects are a set of information and functionality having to do with a single thing, organized into properties with names (aka keys) and values - somewhat similar to a CSS declaration block.

/*
1. <variable declaration keyword/statement>
2. <variable name>
3. {
4. <properties> in key: value, format
5. }
*/

// Example of a "shallow" (one level of depth) object
const restaurant = {
  name: 'Max & Benito', // String
  streetName: 'Wipplingerstraße', // String
  streetNumber: 23, // Number
  apartmentNumber: null, // Null
  postalCode: 1010, // Number
  city: 'Vienna', // String
  country: 'Austria', // String
  foodType: 'Mexican', // String
};

// Everything that isn't a primitive data type is an Object

// Referring to properties
// Dot notation
console.log(restaurant.name);
// Bracket notation
console.log(restaurant['name']);

// ## nested/deep objects
const visitor = {
  name: 'Tatli',
  company: {
    name: 'ITNexus',
    industry: 'Software Engineering',
  },
};

// access inner object properties by referring to them in for notation or bracket notation
console.log(visitor.company.name); // Dot notation
console.log(visitor['company'['name']]); // Bracket notation

// ## Setting existing properties

const myObject = {
  name: 'myProperty',
  level2: {
    name: 'myLevel2property',
  },
};

// ### Dot notation
myObject.name = 'set by dot notation';

/*
Now myObject looks like this:

const myObject = {
  name: 'set by dot notation',
  level2: {
    name: 'myLevel2property',
  },
};
*/

// ### Bracket notation
myObject['name'] = 'set by bracket notation';

// ### Mixed dot and bracket notation
myObject['level2'].name = 'set by mixed dor and bracket notation';

/*
Now myObject looks like this:

const myObject = {
  name: 'set by bracket notation',
  level2: {
    name: 'set by mixed dor and bracket notation',
  },
};
*/

// ## Creating a new property on an object
myObject.newProperty = 21;

/*
Now myObject looks like this:

const myObject = {
  name: 'set by bracket notation',
  level2: {
    name: 'set by mixed dor and bracket notation',
  },
  newProperty: 21,
};
*/

// ## Accessing properties of non-objects will (ex: typo), JS will give you a confusing error saying something like: "Cannot set property X of undefined"

// myObject.level.name = 'Typo Objet instead of Object'; // uncomment to run

/*

file:///C:/Users/Name/projects/js-playground/objects.js:123
myObject.level.name = 'Typo Objet instead of Object';
                    ^

TypeError: Cannot set properties of undefined (setting 'name')
    at file:///C:/Users/Name/projects/js-playground/objects.js:123:21
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

*/

// It will actually look for the property myObject.level.name and try to set it's value to "Typo Objet instead of Object" but it will not find the property inside the object

// ## Constant data structures

const constantVisitor = {
  name: 'Osman',
};

visitor.name = 'Tatli'; // No error!

// Now `visitor` looks like this!
// {
//   name: 'Antje',
// }

// Properties of constant objects and other data structured (arrays, functions) can be reassigned without any errors
// Don't mistake this with const variables, their values cannot be reassigned!
// For the object the "const" means that the variable holding the reference to the object cannot be reassigned to point to a different object. In other words, the reference to the object is constant, but the properties and content of the data can still be modified.
// We are not reassigning the "constantVisitor" variable itself but modifying the "name" property of the object that "constantVisitor references".
// You can think of "const" as providing immutability to the reference, rather than the object itself.

// ## Immutable objects

/*
If you want to make an object immutable and prevent any modification to its properties, you can for example use the "Object.freeze()" method:

The entire object becomes read-only this way, and any attempts ot modify it's properties will result in an error in strict mode.
*/

const frozenVisitor = Object.freeze({
  frozenName: 'Osman',
});

// frozenVisitor.frozenName = 'Tatli'; // Error!

/*

frozenVisitor.frozenName = 'Tatli'; // Error!
                         ^

TypeError: Cannot assign to read only property 'frozenName' of object '#<Object>'
    at file:///C:/Users/Name/projects/js-playground/objects.js:170:26
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

*/

// Keep in mind that the Object.freeze() will only make your top-level properties immutable. However it does not "deeply" freeze, so properties (which themselves are objects) (nested objects) can still be modified unless you explicitly freeze them as well.

// if you want to "deep freeze" an object you could use a function which will check every property of the object and apply a deepfreeze on it, if it is of type "object"
/*

function deepFreeze(obj) {
  // First, freeze the top-level object
  Object.freeze(obj);

  // Iterate over all properties of the object
  for (let propKey in obj) {
    if (obj.hasOwnProperty(propKey) && typeof obj[propKey] === 'object') {
      // If the property is an object, recursively freeze it
      deepFreeze(obj[propKey]);
    }
  }
}

*/

// ## Passing by Value vs Passing by Reference

// ### Passing by value (copying the value of a variable to the new variable or parameter) This happens in JS for primitive values

// Ex:

/*

let message = 'Hello';
let message2 = message; // value copied - but not the address message is referring to

message = 'Goodbye';

// Prints "Hello", because the value was copied
console.log(message2);

// This also applies to functions

let funcMessage = 'Hello';

function changeMessage(message) {
  message = 'Goodbye'; // Reassign only the parameter
}

// Value copied to parameter within function
changeMessage(funcMessage);

// This will print "Hello", because the value was copied and the value of "message" was only message within the functions scope
console.log(funcMessage);

*/

// ### passing by reference (or memory address) - use original value. (changes will affect the original)

// Technically JS passes everything by value for primitives
// For non-primitives such as objects, functions, etc. it passes by reference.

// Example

/*

const greeting = { message: 'Hello' };
const greeting2 = greeting; // Reference copied

// Changing the property on the reference will also change the property on the original object
greeting2.message = 'Goodbye';

// Will print "Goodbye", because the property on the original object was also reassigned
console.log(greeting.message);

*/

// This also applies to functions

// Example

const greeting = { message: 'Hello' };

function changeMessage(greeting) {
  // set the property on the reference
  // also changed the property on the original object
  greeting.message = 'Goodbye';
}

// pass greeting to the function by reference to original object (rather than creating a copy of the object) therefore any changes made to the greeting object inside the function are reflected in the original copy outside the function

console.log(greeting.message);
