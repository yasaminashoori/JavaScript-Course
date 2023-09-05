# JavaScript-Course

# Season 1 

- const
- var

1. What is JavaScript?

- High-level, OO and Multi-Paradigm Programming Language(Functional or Class Programming).

- JS usage: 1-in Front: React, Angular 2. back: node js 3.Desktop: electron 4. Mobile: React Native

2. JS role in web app?

- HTML is the structure and CSS is the presentation and JS makes it usable and dynamic and interacts with the user.

- HTML (structural) noun, CSS (Presentational) adjective, JavaScript (Behavioral) verb.

3. How to run JavaScript?

Before it runs only in browsers (Front-end).

- By JS Engine: Firefox (SpiderMonkey), Chrome (V8).

- Server-Side: Embed v8 engine inside c++ program => NodeJS

- Run JS code outside the browser.

- Back-end of App.

3. What is ECMAScript?

- Releases of JS and Updated versions.

- Annual release of JS from 1997 to 2015 (ES6 is the latest version).

4. And JS is the Programming Language.

- NodeJs used for 3rd party package.

- We should send the JS to the browsers so they can run the codes.
 
- There are two ways to add JS to the project: 1. inside the HTML file with a script tag, run in the console tab of the browser.  2. Add the js app and   run with node.

- The problem with the first way: we have a concept in programming named "Separation of concerns" It means putting everything in the right place in the first place we know that the program will be bigger so the styles, HTML and logic (HTML) are separate. 

- So this is the right way: add the link of the JS file in the index file <script src="./app.js">

- We temporarily store the data in variables. label of the box will be the name and what we put inside the box is the value.

- The names should be meaningful, and use them everywhere in our program. we described them with these three keywords: var, Const, and Let.

- Don't use var! it is outdated.

- The names of var are camelCase and react PascalCase.

- Data types: 1. Primitive types (value type includes: Boolean, Null, Undefined, Number, String, Symbol) 2.Object type (reference type includes: Array, Object, Function, Date, Regex).

- JS is a Dynamic type and doesn't have to manually define and determine them automatically.

- Const vs. Let: Const values can't be changed. and use const as much as possible. with let we can have undefined vars but in const we can't.

- The most of types that we have in js are object types.

-  Object means the related data that is gathered together and we can't store them in class.

- The objects are collections of key: values. 

- NOTE: we can change the values that are declared with const in object type cause we didn't change the reference itself but we changed the property of the object or index of the array. ( but give an error if you write a new object with the same name user and want to declare it)

- Dynamic objects with bracket notation.

- List data: Arrays, the order of values have mattered. the address of each one is called the index. array type: object.

- Array size isn't fixed and they're dynamic to add an index.

- Operators exist in maths too. first kind of them are Arithmetic operators: 1.+ 2.- 3.* 4./

- console.log("4" + 3); concat and both types are string in + both converts to string.

- we called a number inside a string: A numeric String like "4".

- In -,/,* the numeric string converts to a number and the boolean to a number (null=0, true=1, false=0).

- NAN: is an error that says not a number, it means we can't do subtraction of a "4" with "yas" and also We can't MUltiply a number in a string: "4" * "yas".

- and "4" and "3" we can do the operations and convert them to numbers.

- We can separate the long numbers with the (underline _ ) sign. like: 300_000.

- The result of Comparisons is boolean.

- Equality: 1. Strict (type, value) ===  2.Loose (value) == 

- NOTE: use from strict type as much as you can cause it is more secure.

- Not Equality: !== (type, value), != (value).

- Ternary: Condition ? "AAA" : "BBB". 

- Ternary: kind of if condition, not only strings but functions or results can be used.

- Logical operators-boolean : and &&, || or, ?? (null coalesing), !(not).

- OR: do the process until reach the first truthy, if none of them are truthy it will return the last expression.

- AND: do the process until reach the first falsy, if all of them are truthy return the last expression.

- Logical operators-non-boolean: there is a concept called truthy and falsy. 

- falsy: 0, "", null, undefined, NAN. and the result of &&, || shouldn't be always boolean.

- Truthy: except above options.

- ?? used for converting 0 and "" to truthy values.

- Control flow: if-else/ switch-case/ for/ while.

- if used from BREAK it will check the other conditions too. when used switch-case that the values are constant like strings, int.
- 
- for loop:  

- for of and for in:  they used in another place. for in: for objects when want to find key values. and for if for idexes of array.

- break: the process will stup and the loop will be end.

- continue: if a specific condition was true it returns to the first of the loop and runs the loop again and didn't run the other lines of the loop. use it in special scenarios.

- function: Power ( ** ), every func gives parameters in ().

- question: we always need to show a log to the user or wants to access the result of the processing

- return: everything after return will ignore. and the result is stored in the func.

we have multy return but one of the runs the first one

- this refers to an object that operates the method.

- Constuctor / factory function

# Season 10: Introduction to DOM 
1. At first we want to Implement and show them in our browser and all changes that are applied to HTML. so what is DOM Manipulation that is an important task of JS and first of all what is DOM? When we talk about DOM, we mean the HTML document but we showed them as objects or reversed objects that we named them as DOM (Document Object Model) a model from html document. and DOM is a method of presenting the HTML tags as father-child relationship that with the help of it we can change the attributes, elements content and it called interacting with Js with the HTML Document that we have. dom is not restricted to js and the browser enables us to use it. in a nutshell, the HTML document converts to a DOM or an object and the Document is the entry point's of this object and the first child is HTML itself has a Head and body and so on it's called DOM Traversing. to access to the HTML tags in JavaScript we used from DOM helped us everything in our HTML Doc includes tag we can access it as an object includes the properties, names, id and the other details. so the duty of DOM is creating a structure that  with the help of JS we can access to DOM and select the HTML tags or create the elements, remove or update: DOM Manipulation
DOM isn't just for JS!

2. Select elements in DOM: we talked about that Document is the entry point. so we can access to all the data with typying "document." and they are CSS properties.
one of the methods are queryselector that the entries of document. 


  














