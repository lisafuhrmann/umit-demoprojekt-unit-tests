const expect = require("chai").expect;
const apiTemperature = require("../public/js/auxiliaryAPI");

describe("Temperature Conversion", function () {
  describe("celsiusToFahrenheit()", function () {
    it("should convert 0°C to 32°F", function () {
      expect(apiTemperature.celsiusToFahrenheit(0)).to.equal(32);
    });

    it("should convert 100°C to 212°F", function () {
      expect(apiTemperature.celsiusToFahrenheit(100)).to.equal(212);
    });
  });

  describe("fahrenheitToCelcius()", function () {
    it("should convert 32°F to 0°C", function () {
      expect(apiTemperature.fahrenheitToCelcius(32)).to.equal(0);
    });

    it("should convert 212°F to 100°C", function () {
      expect(apiTemperature.fahrenheitToCelcius(212)).to.equal(100);
    });
  });
});

describe("Greeting Tests", function () {
  describe("getGreetingDependOnTime()", function () {
    // ✅ KORRIGIERT: Um 12:00 (Tag) sollte "Guten Morgen" kommen
    it("should return 'Guten Morgen' at 12:00 (daytime)", function () {
      const date = new Date("2020-01-01 12:00:00");
      expect(apiTemperature.getGreetingDependOnTime(date)).to.equal(
        "Guten Morgen"
      );
    });

    // ✅ KORRIGIERT: Um 23:00 (Nacht/Abend) sollte "Guten Abend" kommen
    it("should return 'Guten Abend' at 23:00 (evening/night)", function () {
      const date = new Date("2020-01-01 23:00:00");
      expect(apiTemperature.getGreetingDependOnTime(date)).to.equal(
        "Guten Abend"
      );
    });
  });
});
