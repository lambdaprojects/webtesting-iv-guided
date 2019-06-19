const request = require("supertest");

const server = require("./server.js");

describe("server", () => {
  it("Check for testing environment", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
});

// open client, make a request and inspect the response
describe("GET /", () => {
  it("Should return 200 OK", () => {
    request(server)
      .get("/")
      .expect(200);
  });

  it("using the squad (async/await)", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  it("using the squad (async/await)", async () => {
    const res = await request(server).get("/");
    expect(res.type).toBe("application/json");
  });

  it("using the squad (async/await)", done => {
    const res = request(server)
      .get("/")
      .then(res => {
        expect(res.type).toBe("application/json");
        done();
      });
  });

  it("Should return {api:'up'}", () => {
    request(server)
      .get("/")
      .then(res => {
        const { api } = res.body;
        expect(res.body.api).toBe("up");
      });
  });
});
