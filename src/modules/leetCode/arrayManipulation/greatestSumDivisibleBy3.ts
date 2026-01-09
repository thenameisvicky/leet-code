import { LeetcodeStrategy } from "../../helpers";

/**
 * Greatest Sum Divisible by Three (LeetCode 1262)
 *
 * Problem: Given an integer array nums, return the maximum possible sum of elements of the array such that it is divisible by three.
 *
 * Example:
 * Input: [3,6,5,1,8]
 * Output: 18
 *
 * @param params - Array of numbers
 * @returns - greatest sum (number)
 */
export class GreatestSumDivisibleBy3Strategy
  implements LeetcodeStrategy<{ nums: Array<number> }, number>
{
  function(params: { nums: Array<number> }): number {
    const { nums } = params;
    const sum = nums.reduce((acc, num) => acc + num, 0);

    if (sum % 3 === 0) return sum;

    let totoalSum = 0;
    let singleNumberDiff = 0;
    let multiNumberDiff = 0;

    for (const number of nums) {
      if ((sum - number) % 3 === 0) {
        singleNumberDiff = sum - number;
        break;
      }
    }

    for (const number of nums) {
      if (number % 3) totoalSum += sum;
      if ((sum - totoalSum) % 3 === 0) {
        multiNumberDiff = totoalSum - number;
        break;
      }
    }

    return Math.max(singleNumberDiff, multiNumberDiff);
  }
}
