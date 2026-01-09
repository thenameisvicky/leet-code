import { expect } from "chai";
import { getLeetcodeResult } from "../../modules/helpers";

describe("Array Manipulation", () => {
  describe("121. Best Time to Buy and Sell Stock", () => {
    let maximumProfit;
    it("Returns 0 according to the input [9, 7, 5, 3, 1]", () => {
      maximumProfit = getLeetcodeResult("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
        array: [9, 7, 5, 3, 1],
      });
      expect(maximumProfit).equal(0);
    });

    it("Returns 4 according to the input [1, 2, 3, 4, 5]", () => {
      maximumProfit = getLeetcodeResult("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
        array: [1, 2, 3, 4, 5],
      });
      expect(maximumProfit).equal(4);
    });

    it("Returns 5 according to the input [7, 1, 5, 3, 6, 4]", () => {
      maximumProfit = getLeetcodeResult("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
        array: [7, 1, 5, 3, 6, 4],
      });
      expect(maximumProfit).equal(5);
    });

    it("Returns 0 according to the input [5]", () => {
      maximumProfit = getLeetcodeResult("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
        array: [5],
      });
      expect(maximumProfit).equal(0);
    });

    it("Returns 0 according to the input [5, 5, 5, 5, 5]", () => {
      maximumProfit = getLeetcodeResult("BEST_TIME_TO_BUY_AND_SELL_STOCK", {
        array: [5, 5, 5, 5, 5],
      });
      expect(maximumProfit).equal(0);
    });
  });

  describe("1550. Three Consecutive Odds", () => {
    let threeConsecutiveOdds;
    it("Returns false according to the input [2,6,4,1]", () => {
      threeConsecutiveOdds = getLeetcodeResult("CONSECUTIVE_ODDS", {
        array: [2, 6, 4, 1],
      });
      expect(threeConsecutiveOdds).equal(false);
    });

    it("Returns true according to the input [7,2,5,10,13,17,22,25,31,47]", () => {
      threeConsecutiveOdds = getLeetcodeResult("CONSECUTIVE_ODDS", {
        array: [7, 2, 5, 10, 13, 17, 22, 25, 31, 47],
      });
      expect(threeConsecutiveOdds).equal(true);
    });

    it("Returns true according to the input [0, 0.1, 0.3, 0.5, 5, 7, 9, 0.9, 11, 13, 15]", () => {
      threeConsecutiveOdds = getLeetcodeResult("CONSECUTIVE_ODDS", {
        array: [0, 0.1, 0.3, 0.5, 5, 7, 9, 0.9, 11, 13, 15],
      });
      expect(threeConsecutiveOdds).equal(true);
    });

    it("Returns false according to the input [0, 0, 100, 100000, 1000000, 10, 2000000, 7600000, 9400000, 130, 120]", () => {
      threeConsecutiveOdds = getLeetcodeResult("CONSECUTIVE_ODDS", {
        array: [
          0, 0, 100, 100000, 1000000, 10, 2000000, 7600000, 9400000, 130, 120,
        ],
      });
      expect(threeConsecutiveOdds).equal(false);
    });

    it("Returns true according to the input [1.5, 3.7, 5.9]", () => {
      threeConsecutiveOdds = getLeetcodeResult("CONSECUTIVE_ODDS", {
        array: [1.5, 3.7, 5.9],
      });
      expect(threeConsecutiveOdds).equal(true);
    });
  });

  describe("717. 1-bit and 2-bit Characters", () => {
    let isOneBitCharacter;

    it("Returns true according to the input [0]", () => {
      isOneBitCharacter = getLeetcodeResult("IS_ONEBIT_CHARACTER", {
        array: [0],
      });

      expect(isOneBitCharacter).equal(true);
    });

    it("Returns true according to the input [1,1,0]", () => {
      isOneBitCharacter = getLeetcodeResult("IS_ONEBIT_CHARACTER", {
        array: [1, 1, 0],
      });

      expect(isOneBitCharacter).equal(true);
    });

    it("Returns false according to the input [1,1,1,0]", () => {
      isOneBitCharacter = getLeetcodeResult("IS_ONEBIT_CHARACTER", {
        array: [1, 1, 1, 0],
      });

      expect(isOneBitCharacter).equal(false);
    });

    it("Returns false according to the input [0,0,0,0,1,0]", () => {
      isOneBitCharacter = getLeetcodeResult("IS_ONEBIT_CHARACTER", {
        array: [0, 0, 0, 0, 1, 0],
      });

      expect(isOneBitCharacter).equal(false);
    });

    it("Returns true according to the input [1,0,1,1,0]", () => {
      isOneBitCharacter = getLeetcodeResult("IS_ONEBIT_CHARACTER", {
        array: [1, 0, 1, 1, 0],
      });

      expect(isOneBitCharacter).equal(true);
    });
  });

  describe("1262. Greatest Sum Divisible by Three", () => {
    let greatestDivisibleSum;

    it("Returns 18 according to the input [3,6,5,1,8]", () => {
      greatestDivisibleSum = getLeetcodeResult("GREATEST_SUM_DIVISIBLEBY_3", {
        nums: [3, 6, 5, 1, 8],
      });

      expect(greatestDivisibleSum).equal(18);
    });

    it("Returns 9 according to the input [4, 4, 5]", () => {
      greatestDivisibleSum = getLeetcodeResult("GREATEST_SUM_DIVISIBLEBY_3", {
        nums: [4, 4, 5],
      });

      expect(greatestDivisibleSum).equal(9);
    });

    it("Returns 15 according to the input [4, 10, 5]", () => {
      greatestDivisibleSum = getLeetcodeResult("GREATEST_SUM_DIVISIBLEBY_3", {
        nums: [4, 10, 5],
      });

      expect(greatestDivisibleSum).equal(15);
    });

    it("Returns 39 according to the input [6, 12, 20, 1]", () => {
      greatestDivisibleSum = getLeetcodeResult("GREATEST_SUM_DIVISIBLEBY_3", {
        nums: [6, 12, 20, 1],
      });

      expect(greatestDivisibleSum).equal(39);
    });

    it("Returns 60 according to the input [4, 10, 5, 20, 21]", () => {
      greatestDivisibleSum = getLeetcodeResult("GREATEST_SUM_DIVISIBLEBY_3", {
        nums: [4, 10, 5, 20, 21],
      });

      expect(greatestDivisibleSum).equal(60);
    });
  });
});
