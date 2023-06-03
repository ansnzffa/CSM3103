function printDivisibleByZ(z) {
    for (var i = 1; i <= 100; i++) {
        if (i % z === 0) {
            console.log(i);
        }
    }
}

printDivisibleByZ(2);
printDivisibleByZ(6);
