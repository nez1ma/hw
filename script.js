let num1;
let num2;

while (true) {
    let input = prompt("Введіть перше число:");
    if (input !== null && input.trim() !== "" && !isNaN(input)) {
        num1 = Number(input);
        break;
    }
}

while (true) {
    let input = prompt("Введіть друге число:");
    if (input !== null && input.trim() !== "" && !isNaN(input)) {
        num2 = Number(input);
        break;
    }
}

if (num1 % num2 === 0) {
    alert("Числа кратні!");
} else {
    alert(false);
}