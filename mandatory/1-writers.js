/* 
  Challenge 1: Famous Writers

  Did you know you can also have an Array of Objects? 

  You might think "This is madness!" but in everyday coding life
  it is quite a frequent combination. Just think about what benefits we can get from this construct.

  An object lets you store multiple values in a single variable, then you can store complex objects in an array.
  Let's assume you have a list of data about people names and their birthday and you would like to print each name
  with corresponding birthday together. 

  Storing these pieces of information in different arrays and then pairing them up
  makes the iteration unnecessarily complicated, code will be less intuitive, needs extra cognitive effort to
  reason about and last but not least it can be error-prone (for example, you match up the wrong birthday to a name).

  In this exercise you will practice how to access Objects stored in an Array and their properties. You already know 
  different ways of looping through Arrays, it won't be different in this case. The only extra step is that you have to 
  use values inside Objects.
*/

// We've created an array of objects for you here:
let writers = [{
    firstName: "Virginia",
    lastName: "Woolf",
    occupation: "writer",
    age: 59,
    alive: false,
  },
  {
    firstName: "Zadie",
    lastName: "Smith",
    occupation: "writer",
    age: 41,
    alive: true,
  },
  {
    firstName: "Jane",
    lastName: "Austen",
    occupation: "writer",
    age: 41,
    alive: false,
  },
  {
    firstName: "Bell",
    lastName: "Hooks",
    occupation: "writer",
    age: 64,
    alive: true,
  },
];

/*
Exercise 1:

  Loop through the Array, and for each object, use `console.log()` to print out the below sentence
  and insert the corresponding values to the place holders that are indicated in curly braces:

  "Hi, my name is {firstName} {lastName}. I am {age} years old, and work as a {occupation}."
*/

function output(writer) {
  console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`)
}

console.log(`\nExercise 1\nMethod`);
writers.forEach(output);

console.log(`\nAnother method 1`);
writers.map(output);

console.log(`\nAnother method 2 (shorten from method)`);
writers.forEach(writer =>
  console.log(`Hi, my name is ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old, and work as a ${writer.occupation}.`));

/*
Exercise 2:

  Only `console.log()` out the writers who are in their 40s (meaning between 40 and 49)
  and not alive anymore. Use the below sentence format:

  "Writer {firstName} {lastName} died at {age} years old."
*/

function condition(writer) {
  if (writer.age >= 40 && writer.age < 50 && writer.alive === false) {
    console.log(`Writer ${writer.firstName} ${writer.lastName} died at ${writer.age} years old.`);
  };
};

console.log(`\nExercise 2`);
writers.forEach(condition);

console.log(`\nShorten version`);
writers.filter(writer => (writer.age >= 40 && writer.age < 50 && writer.alive === false)).forEach(writer =>
  console.log(`Writer ${writer.firstName} ${writer.lastName} died at ${writer.age} years old.`));

/*
Exercise 3:

  Only `console.log()` out alive writers who are in their 40s (meaning between 40 and 49):

  "Hi, my name is {firstName} {lastName}. I am {age} years old."
*/
console.log(`\nExercise 3`);
writers.filter(writer => (writer.age >= 40 && writer.age < 50 && writer.alive === true)).forEach(writer =>
  console.log(`Writer ${writer.firstName} ${writer.lastName}. I am ${writer.age} years old.`));