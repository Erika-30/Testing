const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

describe("index.html", () => {
  BeforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  describe("head", () => {
    test("Have a title", () => {
      let title = document.querySelector("head title");
      expect(titled).toBeDefined();
    });

    test("does exist the title tag?", () => {
      expect(document.title).toBeDefined();
    });
  });
});
