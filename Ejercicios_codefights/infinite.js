function isEven(num) {
    return num % 2 === 0;
}

function isInfiniteProcess(a, b) {
    if (a < b) {
        if (isEven(a) == isEven(b)) {
            return false
        } else {
            return true
        }
    } else if (a >= b) {
        return true
    }
}

isInfiniteProcess(2, 6);
isInfiniteProcess(2, 3);
