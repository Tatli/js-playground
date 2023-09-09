// What is the difference between these code blocks?

// ##### Code Block 1 #####

/*
What feels weird about this:
 - A function having a `this`
 - Feels like "a constructor for a function"
 */
function PrototypicalGreeting(greeting = 'Hello', name = 'World') {
  this.greeting = greeting;
  this.name = name;
}

/* What feels weird about this:
  - How the f does a function have properties you can modify(access,add,etc)?
  - We're setting the "greet" property of the "PrototypicalGreeting" function to
    "return `${this.greeting}, ${this.name}!`" which feels like eating a soup with a fork to me
    We're essentially giving it a method "greet" which will return something
*/
PrototypicalGreeting.prototype.greet = function () {
  return `${this.greeting}, ${this.name}! \n And I'm the "this": ${this}`;
};

/* What feels weird about this:
  - How can you instantiate an object of a function?
*/
const greetProto = new PrototypicalGreeting('Hey', 'folks');
console.log(greetProto.greet());

//  ##### Code Block 2 #####

/*
  What feels off:
  - The properties of the class are limited inside of the constructor
    Shouldn't they be inside of the class (one level higher - scope wise)
    or are the properties only created when an object is instantiated
    with those specific properties?

    Other than that, it's a pretty straight forward class, containing
    - properties (yes, in this case there are none)
    - constructor
    - method(s)
*/
class ClassicalGreeting {
  constructor(greeting = 'Hello', name = 'World') {
    this.greeting = greeting;
    this.name = name;
  }

  greet() {
    return `${this.greeting}, ${this.name}!`;
  }
}

const classyGreeting = new ClassicalGreeting('Hey', 'folks');

console.log(classyGreeting.greet());

/*
  ##### Answer #####
  Both do the same thing. They print "Hey, folks!"

 ##### Difference #####
  The difference is, one uses ES6 class syntax, the other uses prototyping


*/

// Source: (Quiz 1) https://www.toptal.com/javascript/es6-class-chaos-keeps-js-developer-up
