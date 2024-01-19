const {brunchCalc} = require('./script')

test("Test Jest is working", () => {
    expect(1+1).toBe(2);
)}

test("Check brunchCalc accepts positive number", () => {
    expect(brunchCalc(100000)).toBe(7143)
});

test("Check brunchCalc rejects negative number", () => {
    expect(brunchCalc(-100000)).toBe("Please input a positive number")
});