Q1- setTimeout
Q2- Placement of JS
Q3- let, const and var defference
Q4- closure
Q5- Functional Programming (Pure Function)
Q6- this keyword 
Q7- Frameworks
Q8- Prototypical Inheritance
Q9- Promises, Async, Await and callback
Q10- Debounce and Throttle

<!-- architecture -->

js engine e call stack thake jekhane j code deya hoi immidiate run kore dei wait for none , but browser e web api thake jeta amon akta architecture follow kore jodi 5 sec por code run korte boli then call stack k 5 sec por code dei --> setTimeout , set interval ,promises ,fetch ,agulo js er part na agulo beowser er part aguli window object e set thake,

after 5 sec j call back function e code ache aita k task quequ or callback queqe te dei then kaj kore event loop 
, avent loop task q theke akta akta kore call stack e dei and call stack aita k execute kore dei

promises er jonno akta q thake oitar nam micro task queue**

both queue theke micro task queue er priority  beshi thake


============================================= javascript and typescript quetions =========================

# JavaScript

### What is the difference between `var`, `let`, and `const`?

- **var**: Declares a variable globally or within a function scope (if declared inside a function), can be re-assigned, and can be redeclared.
- **let**: Declares a block-scoped variable that can be re-assigned but cannot be redeclared in the same block.
- **const**: Declares a block-scoped variable that cannot be re-assigned and cannot be redeclared in the same block.

### What are JavaScript data types?

JavaScript has 8 data types:

- **Primitive types**: string, number, bigint, boolean, undefined, symbol, null.
- **Object types**: object, array, function.

### What is the difference between `==` and `===` in JavaScript?

- `==` is a loose equality operator that performs type coercion before comparison.
- `===` is a strict equality operator that compares both value and type without type coercion.

### What is a closure in JavaScript?

A closure is a function that "remembers" its lexical scope, even when the function is executed outside that scope.

### Explain the concept of a callback function.

A callback function is a function that is passed as an argument to another function and is executed after the completion of the first function’s operation.

### What is hoisting in JavaScript?

Hoisting is JavaScript’s behavior of moving declarations (but not initializations) to the top of their containing scope during the compilation phase.

### What is the event loop in JavaScript?

The event loop is a mechanism that allows JavaScript to perform non-blocking asynchronous operations by placing functions or tasks in a queue to be executed after the current execution context.

### What is the difference between synchronous and asynchronous programming?

- **Synchronous**: Code runs sequentially, blocking further execution until the current operation is completed.
- **Asynchronous**: Code execution can continue while waiting for a task (like I/O) to complete.

### What is the purpose of the `this` keyword in JavaScript?

The `this` keyword refers to the object that is executing the current piece of code, or the context in which a function was called.

### What are promises in JavaScript?

A promise is an object representing the eventual completion or failure of an asynchronous operation. Promises can be in one of three states: pending, fulfilled, or rejected.

### What is a JavaScript module, and how do you import/export modules?

A module is a file that contains code (variables, functions, etc.) that can be imported and used in other files. You can use `export` to make code accessible and `import` to bring it into another file.

```js
// export
export const greet = () => { console.log("Hello!"); }

// import
import { greet } from './greet.js';

### What is the difference between `null` and `undefined`?

- **null**: A special value representing the intentional absence of any object value.
- **undefined**: A variable that has been declared but not assigned a value.

### What is the spread operator and how do you use it?

The spread operator (`...`) is used to copy or spread elements from an array or object into another array or object.

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // [1, 2, 3, 4]
```

## What is the difference between `forEach`, `map`, and `filter`?
- `forEach`: Executes a provided function once for each array element but does not return a new array.
- `map`: Creates a new array populated with the results of calling a provided function on every element.
- `filter`: Creates a new array with elements that pass a test defined in the provided function.

## What is a function expression?
A function expression is a function defined inside an expression, typically assigned to a variable.]

```js
const greet = function() { console.log("Hello!"); };

```

## What are template literals in JavaScript? Template literals allow embedding expressions inside string literals using backticks (`) and ${}` syntax for interpolation.

```js
const name = 'Alice';
console.log(`Hello, ${name}!`);

```

## Explain the concept of setTimeout and setInterval.

setTimeout: Executes a function once after a specified delay.
setInterval: Executes a function repeatedly at specified intervals.]

## What is the difference between call(), apply(), and bind()?

call(): Invokes a function immediately with the provided this context and arguments.
apply(): Similar to call(), but takes an array of arguments.
bind(): Returns a new function with a specified this context, but does not execute immediately.

## What are arrow functions and how do they differ from regular functions? Arrow functions are a shorter syntax for writing functions. They do not have their own this, and instead, inherit it from the surrounding context.

```js
const sum = (a, b) => a + b;

```

## What is event delegation? Event delegation is a technique where an event listener is added to a parent element instead of individual child elements. This helps to handle events efficiently when the number of child elements is dynamic

```js

Now everything is wrapped in brackets, just as you requested! You can copy and paste this into your README file. Let me know if you'd like any further changes.

```

# typescript

# TypeScript Interview Questions and Answers

## [What is TypeScript?]
TypeScript is a superset of JavaScript that adds static typing to the language. It compiles down to plain JavaScript and helps developers catch type-related errors during development.

## [What are the benefits of using TypeScript over JavaScript?]
TypeScript offers features like static typing, interfaces, classes, and type inference, which helps catch errors during development, improve code readability, and maintainability.

## [What is a type annotation in TypeScript?]
Type annotations specify the type of a variable, function parameter, or return type.

```ts
let age: number = 30;

```

## What is the difference between interface and type in TypeScript?
interface: Used to define the structure of an object, and can be extended using extends.
type: Used to define more complex types, including unions and intersections.

## What is Type Inference in TypeScript?
Type inference allows TypeScript to automatically determine the type of a variable based on its initial value.

## What is a Union Type in TypeScript?
A union type allows a variable to hold multiple types.

## What is an Intersection Type in TypeScript?
An intersection type combines multiple types into one.

```js 
type Person = { name: string };
type Employee = { id: number };
type Worker = Person & Employee;

```

## What are Generics in TypeScript?

Generics allow you to write reusable and type-safe code by enabling types to be passed as parameters to functions, classes, or interfaces.

```js
function identity<T>(arg: T): T {
    return arg;
}

```

## What is the never type in TypeScript?
The never type represents values that never occur (e.g., a function that always throws an error or a function with an infinite loop).

```js
function throwError(): never {
    throw new Error("Error occurred");
}

```

## What is a tuple in TypeScript?

A tuple is an array with a fixed number of elements, each of which can have a different type.
```js
let tuple: [string, number] = ["hello", 42];

```

## [What is the `as` keyword in TypeScript?]
The `as` keyword is used for type assertions, which tell the TypeScript compiler to treat a value as a specific type.

```ts
let someValue: any = "hello";
let strLength: number = (someValue as string).length;
```

## [What are type aliases in TypeScript?]
Type aliases allow you to create custom type names for a given type, making your code more readable.

```ts
type Point = { x: number; y: number };
```

## What is the difference between == and === in TypeScript?
TypeScript follows JavaScript behavior:

== compares values after type coercion.
=== compares both value and type without coercion.

## What is the void type in TypeScript?
The void type is used for functions that do not return any value.

```ts
Copy
function log(message: string): void {
    console.log(message);
}
```
## What are public, private, and protected modifiers in TypeScript?
public: Members can be accessed from anywhere.
private: Members can only be accessed within the class.
protected: Members can be accessed within the class and subclasses.

## What is an abstract class in TypeScript?
An abstract class cannot be instantiated directly and is used as a base class for other classes.

```ts
Copy
abstract class Animal {
    abstract makeSound(): void;
}
```
## What is the readonly modifier in TypeScript?
The readonly modifier is used to define properties that cannot be reassigned after they are initialized.

```ts
Copy
class Point {
    readonly x: number;
    readonly y: number;
}
```
## What is a class in TypeScript?
A class in TypeScript is a blueprint for creating objects with properties and methods.

```ts
Copy
class Person {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}
```
## What is the keyof operator in TypeScript?
The keyof operator returns the type of the keys of an object.

```ts
Copy
interface Person { name: string; age: number; }
type PersonKeys = keyof Person;  // 'name' | 'age'
```
## What is the in operator in TypeScript?
The in operator is used to check if a property exists in an object or if a type exists in a union type.

```ts
Copy
let obj = { name: "Alice" };
"name" in obj;  // true
```





