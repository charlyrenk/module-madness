function randomNumber(min, max) {
    var newRandomNumber = Math.floor(Math.random() * (1 + max - min) + min);
    return newRandomNumber;
}
module.export = randomNumber;