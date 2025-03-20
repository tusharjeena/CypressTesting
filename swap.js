let a = 12, b = 15;
console.log(`Before swapping: a = ${a}, b = ${b}`);

// Using a third variable
let temp = a;
a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);

/**
 * 
 * let a = 12, b = 15;
console.log(`Before swapping: a = ${a}, b = ${b}`);

// Swapping without using a third variable
a = a + b;
b = a - b;
a = a - b;

console.log(`After swapping: a = ${a}, b = ${b}`);
 */