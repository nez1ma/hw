let num1;
let num2;

while (true) {
    let input = prompt("Введіть перше число:");
    let value = Number(input);

    if (input && input.trim() !== "" && !isNaN(value)) {
        num1 = value;
        break;
    }
}

while (true) {
    let input = prompt("Введіть друге число:");
    let value = Number(input);

    if (input && input.trim() !== "" && !isNaN(value)) {
        num2 = value;
        break;
    }
}

if (num1 % num2 === 0) {
    alert("Числа кратні!");
} else {
    alert(false);
}