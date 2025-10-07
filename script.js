function filter (arrOfNumbers, fn) {
    const result = [];
    arrOfNumbers.forEach(element => {
        if (!fn(element)) {
            result.push(element);
        }
    });
    return result;
}

function deleteElement (element) {
    if (element > 5) {
        return true;
    }
    return false;
}

console.log(filter([3, 6, 9, 2], deleteElement));