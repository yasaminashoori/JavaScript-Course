# JavaScript-Course

# Season 1 
- const
- var

1. What is JavaScript?

- High-level, OO and Multi-Paradigm Programming Language(Functional or Class Programming).

- JS usage: 1-in front: React, Angular 2.back: node js 3.Desktop: electron 4.Mobile: React Native

2. JS role in web app?

- HTML is the structure and CSS is the presentation and js makes it usable and dynamic and intercation with the user.

- HTML (structural) noun, CSS (Presentational) adjective, JavaScript (Behavioral) verb.

3. How to run JavaScript?

Before it runs only in browsers (Front-end).

- By JS Engine: FireFox (SpiderMonkey), Chrome (V8).

- Server-Side: Embed v8 engine inside c++ program => NodeJS

- Run JS code outside browser.

- Back-end of App.

3. What is ECMAScript?

- Releases of JS and Updatded versions.

- Annual release of JS from 1997 to 2015 (ES6 is the latest version).

- And JS is the Programming Language.

- NodeJs used for 3rd party package.

- We should send the JS to the brosers so they can run the codes.
 
- There are two ways for adding JS to the project: 1.inside the HTML file with script tag, run in the console tab of browser.  2. add js app and   run with node .

- The problem with the first way: we have a concept in programming named "Separation of concerns" it means put everything in the right place at the first place we know that the program will be bigger so the styles, html and logic (HTML) seperately. 

- So this is the right way: add the link of JS file in the index file <script src="./app.js">

- We stores temporarily the data in variables. label of box will be the name and what we put inside box is value.

- The names should be meaningful, and use them in everywhere of our program. we described them with these three key words: var, Const, Let.

- Don't use var! it is outdated.

- The names of var is camelCase and react PascalCase.

- Data types: 1.Primitive types (value type includes: Boolean, Null, Undefined, Number, String, Symbol) 2.Object type (reference type includes: Array, Object, Function, Date, Regex).

- JS is Dynamic type and don't have to manually define them and determind automatically.

- Const vs Let: Const values can't be changed. and use const as much as possible. with let we can have undefined vars but in const we can't.

- The most of types that we have in js are object means object type.

-  Object means the related data that gathered together and we can't store them in class.

- The objects are a collection of key: values. 

- NOTE: we can change the values that declared with const in object type cause we didn't change the reference it self but we changed the property of object or index of array. ( but give error if you write a new object with the same name user and want to decalre it)

- Dynamic objects with bracket notation.

- List data: Arrays, the order of values have matter. the adderess of each one called indx. array type: object.

- Array size isn't fixed and they're dynamic to add index.

- Operators exist in maths too. first kind of them are Arithmetic operators: 1.+ 2.- 3.* 4./

- console.log("4" + 3); concat and both types are string in + both converts to string.

- we called a number inside a string: Numeric String like "4".

- In -,/,* the numeric string converts to number and boolean to number (null=0, true=1, false=0).

- NAN: is an error that says not a number, it means we can't do substraction of a "4" with "yas" and also  We can't MUltiply a number in a string: "4" * "yas".

- and "4" and "3" we can do the opeartions and they convert to number.

- We can seperate the long numbers with _ sign. like: 300_000.

- The result of Comparisons are boolean.

- Equality: 1.Strict (type, value) ===  2.Loose (value) == 

- Not Equality: !== (type, value), != (value).

- eorp











