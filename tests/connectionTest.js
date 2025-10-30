const supertest = require("supertest");
const server = require("../index");
const chai = require("chai");
chai.should();
const api = supertest.agent(server);

describe("Server Connection Tests", function () {
  it("should return 200 OK for homepage", function (done) {
    api
      .get("/")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("should serve JavaScript files", function (done) {
    api
      .get("/js/calculation.js")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });

  it("should serve auxiliaryAPI.js", function (done) {
    api
      .get("/js/auxiliaryAPI.js")
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        done();
      });
  });
});
