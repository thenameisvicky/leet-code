import { expect } from "chai";
import { getLeetcodeResult } from "../../modules/helpers";

describe("String Manipulation", () => {
  describe("1513. Number of Substrings With Only 1s", () => {
    let numberOfSubstringsWith1s;
    it("Returns 9 (1, 1, 1, 1, 1, 11, 11, 11, 111) according to the input '0110111' ", () => {
      numberOfSubstringsWith1s = getLeetcodeResult(
        "NUMBER_OF_SUBSTRINGS_ONES",
        { s: "0110111" }
      );
      expect(numberOfSubstringsWith1s).equal(9);
    });

    it("Returns 0 for string with no 1s '0000'", () => {
      numberOfSubstringsWith1s = getLeetcodeResult(
        "NUMBER_OF_SUBSTRINGS_ONES",
        { s: "0000" }
      );
      expect(numberOfSubstringsWith1s).equal(0);
    });

    it("Returns 6 for string with all 1s '111' (1, 1, 1, 11, 11, 111)", () => {
      numberOfSubstringsWith1s = getLeetcodeResult(
        "NUMBER_OF_SUBSTRINGS_ONES",
        { s: "111" }
      );
      expect(numberOfSubstringsWith1s).equal(6);
    });

    it("Returns 1 for single character '1'", () => {
      numberOfSubstringsWith1s = getLeetcodeResult(
        "NUMBER_OF_SUBSTRINGS_ONES",
        { s: "1" }
      );
      expect(numberOfSubstringsWith1s).equal(1);
    });

    it("Returns 2 for alternating pattern '11' (1, 1)", () => {
      numberOfSubstringsWith1s = getLeetcodeResult(
        "NUMBER_OF_SUBSTRINGS_ONES",
        { s: "101" }
      );
      expect(numberOfSubstringsWith1s).equal(2);
    });
  });
});
