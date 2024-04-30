
const addCommas = require("./addCommas.js");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test('adds commas to a positive integer', () => {
    expect(addCommas(1234)).toBe('1,234');
 });

 test('adds commas to a large integer', () => {
    expect(addCommas(1000000)).toBe('1,000,000');
 });

 test('adds commas to a very large integer', () => {
    expect(addCommas(9876543210)).toBe('9,876,543,210');
 });

 test('returns a single digit as is', () => {
    expect(addCommas(6)).toBe('6');
 });

 test('adds commas to a negative integer', () => {
    expect(addCommas(-10)).toBe('-10');
 });

 test('adds commas to a negative integer with more digits', () => {
    expect(addCommas(-5678)).toBe('-5,678');
 });
});
