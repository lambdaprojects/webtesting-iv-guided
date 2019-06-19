const Hobbits = require("./hobbitsModel.js");
const db = require("../data/dbConfig.js");

describe("Hobbits Model", () => {
  beforeAll(async () => {
    await db("hobbits").truncate();
  });
  describe("Insert", () => {
    it("Should insert provided hobbit", async () => {
      await Hobbits.insert({ name: "gaffer" });

      const hobbits = await db("hobbits");

      expect(hobbits).toHaveLength(1);
    });
  });
});
