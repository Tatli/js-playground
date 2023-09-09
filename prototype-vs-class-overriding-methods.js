// I still don't understand how prototypes are "object instances" / not types
// it's a bloody function. look at it

// Declaring a Proto prototype (object?)
function Proto() {
  this.name = 'Proto';
  return this;
}

// Giving Proto a method "getName" which will returns it's name property
Proto.prototype.getName = function () {
  return this.name;
};

/* Creating MyClass which will inherit the properties and methods of it's super "class"/prototype.

Javascript doesn't support traditional class-based inheritance.


   Apparently a "class" can also be extended by a prototype
   The "class" is no real class anyway. It's <classname>.prototype so in our case it's MyClass.prototype
   This is not "true" class-based inheritance; it's prototypal inheritance.
   "class" is just "syntactic sugar" that makes it look like class based inheritance but it's still working with prototypes behind the scenes.

*/
class MyClass extends Proto {
  constructor() {
    super();
    this.name = 'MyClass';
    // this.getName = function () {
    //   return this.name;
    // };
  }
}

// new instance of MyClass type
const instance = new MyClass();

/* "instance" does not have it's own "getName", not is it defined in "MyClass.prototype". Therefore, it will look up the prototype chain to find the "getName" method. In this case, it will find "Proto.prototype.getName", because "MyClass" extends "Proto".

*/

console.log(`instance.getName(): ${instance.getName()}`);
console.log(`MyClass.name: ${MyClass.name}`);
console.log(`Proto.name: ${Proto.name}`);

/*
  The getName() will now return a String instead of the name property
*/
Proto.prototype.getName = function () {
  return 'Overridden by Proto';
};

/*
  What would happen if we deleted the "name" property of "instance"?
  delete instance.name
  Would it then look for Proto.prototype.name?
  no it wouldn't. It would return undefined.
*/
// instance.name should still be "MyClass", right?
console.log(`instance.getName(): ${instance.getName()}`);
console.log(`MyClass.name: ${MyClass.name}`);
console.log(`Proto.name: ${Proto.name}`);

/* WRONG!

why? when instance is obviously an instance of the MyClass type?
Well, remember how how javascript doesn't actually support traditional class-based inheritance and class is just syntax sugar?

This is what's happening here: Inheritance chaining

"MyClass.prototype" is the prototype for objects created with "new MyClass"
"Proto.prototype" is the prototype for objects created with "new Proto()" or any objects that inherit from "Proto"

Initially we created instance "const instance = new MyClass();"
There is no method definition for "getName" within "MyClass.prototype"
At this point, the getName() method is inherited from "Proto.prototype" because "MyClass" extends "Proto" which is set to "function () { return this.name; }"

"instance" is an instance of "MyClass" but it also inherits methods and properties from "Proto" because it extends "Proto".
This means "instance" has both access to "MyClass.prototype" and "Proto.prototype"

When we run instance.getName(), it first looks for the "getName" method in "instance" itself (there is none), then in "MyClass.prototype" (there is none), and finally in "Proto.prototype".
if "instance" had a "getName()" method "in itself" it would mean that it would have it declared in it's constructor and therefore find the method directly on the 'instance' object itself. This way the method would be contained in itself.

class MyClass extends Proto {
  constructor() {
    super();
    this.name = 'MyClass';
    this.getName = function () { ## This needed to be added
      return this.name;          ##
    };
  }
}

This is how Javascript's prototype chain works.

This is also the reason why we get "Overridden by Proto"

*/
