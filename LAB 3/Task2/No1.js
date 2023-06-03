function sumOfDigits(number) {
    const numberString = number.toString();

    let sum = 0;

    for (let i = 0; i < numberString.length; i++) {
        // Convert the character back to a number and add it to the sum
        sum += parseInt(numberString[i]);
    }

    return sum;
}

console.log(sumOfDigits(1919)); 
