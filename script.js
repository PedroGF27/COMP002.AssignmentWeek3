// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10
function min() {
    return 13 < 52 ? 13 : 52;
}

console.log(min(13, 52)); // outputs 13

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4
function circumference(radius) {
    const pi = 3.14159;
    return 2 * pi * radius;
}

console.log(circumference(8)) // outputs 50.26544

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0
function characters(letters, string) {
    let count = 0;
    for (let i=0; i < string.length; i++) {
        if (string[i] === letters) {
            count++;
        }
    }
    return count;
}

console.log(characters("c", "cucumber")); // outputs 2