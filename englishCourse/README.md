# Javascript Course

## Index

### 1. Hello World

To access the developer console in Chrome, press Ctrl + Alt + J or go to the Menu and select View > Developer > Developer Console. The console is used by developers to test and write JavaScript code to fix errors and find bugs. The alert('text') function can be used to display a message in the console.
Note: developer console used for: testing and writing js code to fix errors and find the errors.

For example, you can assign the value 'amazing' to the variable js using the code "let js = 'amazing'". Then, you can use an if statement to check if js is equal to 'amazing', and display a message using the alert() function if it is. Finally, you can assign the value 'boring' to js using the code "js = 'boring'".

JavaScript is a high-level, object-oriented, multi-paradigm programming language. It is high-level, which means that you don't need to worry about managing memory and other complex tasks. It is also a multi-paradigm, which means that it can be used for different programming structures.

JavaScript can be used outside of the browser on a web server, as well as on the front-end of web applications. The latest version of JavaScript, ES6, has huge updates and changes and is called modern JavaScript. It receives yearly updates. It is recommended to learn ES5 before starting with ES6.

### 2. What is Javascript?

JavaScript is a high-level, object-oriented, multi-paradigm programming language. It is considered high-level because the programmer does not need to worry about managing memory and other complex tasks. JavaScript is also multi-paradigm, meaning it can be used for different structures of code.

JavaScript can be used outside of browsers on web servers, as well as on browsers as front-end applications. ES6 (also known as "modern JS") has many updates and changes, and is updated yearly. It's recommended to learn ES5 before starting with ES6.

To create the script tags in JavaScript code, we can use the following code:

<script> </script>

It's important to note that good coding practice involves alerting the user that JavaScript is being used. Also, the value is the smallest unit of information in JavaScript.

Variables in JavaScript can only contain numbers, letters, underscores, and dollar signs, and cannot start with a number.

### 3. Values and Variables:

Only Numbers, Letters, Underscore, and dollar signs are allowed but not the Numbers at the first of vars.

The names should be descriptive so we can understand them better.

Value

values can have dii types. depending on the type of data wwe are want them to hold.

Object and Primitive value

pr : number, string, boolean, undefined, null, symbol, bigint

number: are the floating types.

strings" that simply are sequence of characters and put them in quotes.

boolean: true , false

Undefined => var not yet defined , empty value

Null = > empty

symbol => value can not be changed ES2015

BigInt => (ES2020) larger integers that the numbr type can hold.

Dynamic: not manuallly define the data type. it's the value tha has a type not variable

js executed from top to bottom

dynamic typing : easily chasngesd the variable

when jsut declaring an emptry variable the type and the value both are UNDEFINED

type of null is object but it should be null

### let, Const, var

let const were introduced in es6

let to change the value

reassigning or mutate the age variable.

const not changed

use the let in the top pf prgram and later chane the value.

little variable changes

var => deprecated amd old way before the es6 and works like let. let is block scoped and the var is fuction scoped.

no need to declare and it work but bad idea cause it decalre a propert on global objects.

### Basic Operators:

allow us transform values or combine values.

arithmetic: let to switch the var

join + to concatenate two strings together.

x--;
x++;
x \*= 10;

comparison values to use bloken value:

x > y
true

y > x
false

left to right will needed.

### Operator Precedense

js has a well-defined order of operator precedense.

log( NOW - 1991 > NOW - 2018);

x = y = 25 - 10 - 5;

### 3. Values and Variables:

When creating variable names, you can only use numbers, letters, underscores, and dollar signs. However, you cannot use numbers at the beginning of variable names. It's important to be descriptive when naming variables so that others can easily understand what they represent.

Values can have different types depending on the data that they are meant to hold. There are primitive values and object values. The primitive values include number, string, boolean, undefined, null, symbol, and bigint.

Number refers to the floating-point type, while strings are simply a sequence of characters enclosed in quotes. Boolean values are either true or false. Undefined refers to a variable that has not yet been defined, while null refers to an empty value. Symbol values cannot be changed, while bigint represents integers larger than what the number type can hold.

Dynamic typing is when the value, not the variable, has a type. JavaScript executes code from top to bottom.

When declaring an empty variable, both the type and the value are undefined. The type of null is an object, but it should be null.

### let, const, var

let and const were introduced in ES6. Use let to change the value of a variable, while const cannot be changed. You can use let at the beginning of the program and later change the value, but it's important to make only small changes to variables.

Var is the old way of declaring variables before ES6. It works like let, but var is function scoped, while let is block scoped. There's no need to declare a variable with var, but it's a bad idea, as it declares a property on the global object.

### Basic Operators:

Operators allow us to transform and combine values. Arithmetic operators let us switch the value of a variable. Join + is used to concatenate two strings together. X--, X++, X \*= 10 are examples of operators that let you change the value of a variable.

Comparison values are used to compare two values. For example, x > y will return true if x is greater than y, and false if it's not. When using comparison values, it's important to read from left to right.

### Operator Precedence:

JavaScript follows a specific order of operator precedence. For instance, the expression "log(NOW - 1991 > NOW - 2018)" is evaluated as "log(true)".

To set the value of two variables x and y to 10, you can use the expression "X = y = 25 - 10 - 5".

### Strings and Template Literals:

The easiest way to build strings is by using Template Literals. You can join strings together using the plus sign.

### If-Else Statement:

The If-Else statement checks whether one of them is true or not. It is called the If-Else control structure and does not execute in a linear way. It is not allowed to be used outside of the block, and it only runs inside the blocks.

### Type Conversion and Coercion:

Conversion is a common operation in JavaScript. Type Conversion is done manually and explicitly. Type Coercion is done implicitly and automatically by JavaScript.

When input comes in string format, Number() converts them to number type. However, something that doesn't work is NaN, which means still a number but it fails to give a new number. The string is spelled with a capital S (or N for Number). JS can convert to a number, string, or boolean. Boolean works in a special way.

Coercion Type happens when dealing with two different types, and JavaScript will convert them to match them.

### Truthy and Falsey:

Falsy values are the values that become false when converted to a boolean. Some examples include 0, "", undefined, null, and NaN. Boolean is implicit, and type coercion is always implicit when logical operators are in a logical context like if-else condition/converted to a boolean return.

### Equality Operators:

The comparison operators are similar to before, but now equality operators agree if it's 18. If it has only one line, we don't need to have curly braces. They always return true or false. There are strict (===) and loose equality operators (==); it is always better to use the strict version.

Boolean Logic:

And Or Not.

### Logical Operators:

|| && !

Switch Statement:

It is similar to If-Else, but it is used when there is one value and multiple conditions.

### Statements and Expressions:

An expression is a piece of code that produces a value. For instance, "3 + 4" is an expression, and the value is 7. In comparison, a statement is a more extensive code that contains expressions. Statements cannot be used in expressions.

### The Condition Ternary Operator:

It is used to assign one of two values to a variable depending on a condition. Ternary can be used inside the literal, and all the code is in one line. The operator always produces a value.

### JavaScript Releases ES5 ES6

We had ECMA JS 5 and ECMA JS 6 in 2015 which have huge changes and started the yearly releases from that time. 


### Strict Mode 

1. Forbid us to do certain things
2. It creates visible errors and the developer console where js would fail silently






