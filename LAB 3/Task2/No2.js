function power(x, y) {
    if (y === 0) {
        return 1;
    } else if (y % 2 === 0) {
        let result = power(x, y / 2);
        return result * result;
    } else {
        return x * power(x, y - 1);
    }
}

console.log(power(3, 9)) ;