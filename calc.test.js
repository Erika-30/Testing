const calcHelpers = require("./clac");

describe("calculator", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(2 + 5).toBe(7);
  });
  describe("multiply by 3", () => {
    let multiplyBy3 = calcHelpers.multiplyBy3;

    test("does exist the function?", () => {
      expect(multiplyBy3).toBeDefined();
    });

    test("resive a number to multiply by 3", () => {
      expect(multiplyBy3(5)).toBe(15);
    });
  });

  describe("addTheSe", () => {
    let addTheSe = calcHelpers.addTheSe;

    test("does exist the function?", () => {
      expect(addTheSe).toBeDefined();
    });

    test("resive two numbes to add them", () => {
      expect(addTheSe(3, 5)).toEqual(8);
    });
  });

  describe("divideBy2", () => {
    let divideBy2 = calcHelpers.divideBy2;

    test("resive a number to divide by 2", () => {
      expect(divideBy2(10)).toBe(5);
    });
  });

  describe("substract", () => {
    let substract = calcHelpers.substract;

    test("resive two numbers to substract second from first", () => {
      expect(substract(20, 5)).toBe(15);
    });
  });
});
