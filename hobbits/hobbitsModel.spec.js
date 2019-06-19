const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("Hobbits Model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });
  describe("Insert", () => {
    it("Should insert provided hobbit", async () => {
      await Hobbits.insert({ name: "gaffer" });

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(1);
    });

    it("Should insert provided hobbit multiple times", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({ name: "Sam" });
      expect(hobbit.name).toBe("Sam");

      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(2);
    });
  });
});
