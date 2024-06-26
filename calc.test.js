describe("calc", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(2 + 5).toBe(8);
  });
  describe("multiply by 3", () => {
    test("does exist the function?", () => {
      expect(multiplyBy3).toBeDefined();
    });

    test("resive a number to multiply by 3", () => {
      expect(multiplyBy3(5)).toBe(15);
    });
  });

  describe("addTheSe", () => {
    test("does exist the function?", () => {
      expect(addTheSe).toBeDefined();
    });

    test("resive two numbes to add them", () => {
      expect(addTheSe(3, 5)).toEqual(8);
    });
  });
});
