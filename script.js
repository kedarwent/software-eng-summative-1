function brunchCalc(num) {
    if (typeof num === Number && num > 0) {
        let brunchNum = Math.round((num * 0.25) / 14);
    }
    else {
        alert("Please input a positive number")
    }
}

module.exports = { brunchNum };