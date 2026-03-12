const numbers = [1, 5, 8, 12, 4, 3, 10, 7, 2];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3 && numbers[i] < 10) {
        console.log(numbers[i]);
    }
}

const searchArray = [1, 2, 5, 9, 4, 13, 4, 10];
for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === 4) {
        console.log('Наявний');
        break;
    }
}

const mass = [42, 2, 33, 11, 12, 10, 0];
const average = mass.reduce((total, num) => total + num, 0) / mass.length;
console.log(average);

const animals = ["parrot", "bull", "bear", "monkey"];
const totalChars = animals.reduce((sum, word) => sum + word.length, 0);
console.log(totalChars);

const mixed = ["parrot", 140, "bull", true, 0, "bear", 47, "monkey"];
const stringsOnly = mixed.filter(item => typeof item === 'string');
console.log(stringsOnly);