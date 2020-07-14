const enhancer = require("./enhancer.js");
// test away!
const item1 = {
  name: "diamond ring of testing",
  durability: 75,
  enhancement: 3,
};
const item2 = {
  name: "gold ring of testing",
  durability: 50,
  enhancement: 15,
};
const item3 = {
  name: "silver ring  of testing",
  durability: 60,
  enhancement: 18,
};

describe("repair", () => {
  it("should return item with durability of 100", () => {
    expect(() => {
      enhancer.repair(item1).toBe(item1.durability == 100);
    });
  });
});

describe("enhancer", () => {
  describe("success", () => {
    it("successful enhancement", () => {
      expect(() => {
        originalValue = item1.enhancement;
        enhancer.succeed(item1).toBe(item1.enhancement == originalValue + 1);
      });
    });
  });
  describe("failure cases", () => {
    it("failure case 1", () => {
      expect(() => {
        originalValue = item1.durability;
        enhancer.fail(item1).toBe(item1.durability == originalValue - 5);
      });
    });
    it("failure case 2", () => {
      expect(() => {
        originalValue = item2.durability;
        enhancer.fail(item2).toBe(item2.durability == originalValue - 10);
      });
    });
    it("failure case 3", () => {
      expect(() => {
        originalValue1 = item3.durability;
        originalValue2 = item3.enhancement;
        enhancer
          .fail(item3)
          .toBe(
            item3.durability == originalValue - 10 &&
              item3.enhancement == originalValue2 - 1
          );
      });
    });
  });
});
