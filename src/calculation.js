function add(a, b) {
    return (a + b).toPrecision(15) * 1; //simple solution to solve a problem whith float point in js
}

function subtract(a, b) {
    return (a - b).toPrecision(15) * 1;
}

function multiple(a, b) {
    return (a * b).toPrecision(15) * 1;
}

function divide(a, b) {
    return (a / b).toPrecision(15) * 1;
}

export default {
    add: add,
    subtract: subtract,
    multiple: multiple,
    divide: divide
};
