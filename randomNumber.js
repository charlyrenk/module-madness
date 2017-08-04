function randomNumber(min, max) {
    var newRandomNumber = Math.floor(Math.random() * (1 + max - min) + min);
    return newRandomNumber;
}

// console.log(randomNumber(100, 1000000));

module.exports = randomNumber;