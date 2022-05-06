import { calculation } from "../src/index";
import { transactions } from "../data";
test("test case 1", function () {
  const expected = 90;
  const result = calculation(transactions, 1, 3);
  expect(result).toBe(expected);
});

test("test case 2", function () {
  const expected = 430;
  const result = calculation(transactions, 1);
  expect(result).toBe(expected);
});

test("test case 3", function () {
  const expected = 0;
  const result = calculation(transactions, 2);
  expect(result).toBe(expected);
});
