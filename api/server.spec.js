const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
  it("Check for testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

// open client, make a request and inspect the response
describe("GET /", () => {
  it("Should return 200", () => {});
});
