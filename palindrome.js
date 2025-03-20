let number = 121;
let originalNumber = number;
let reversedNumber = 0;

while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
}

console.log(`${originalNumber} is ${originalNumber === reversedNumber ? 'a palindrome' : 'not a palindrome'} number.`);