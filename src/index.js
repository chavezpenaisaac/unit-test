// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
import { transactions } from "../data";
export function calculation(transactions, customer, month = null) {
  let points = 0;
  transactions.forEach((transaction) => {
    if (
      transaction.customer === customer &&
      (!month || month === transaction.month)
    ) {
      let point = 0;
      if (transaction.purchase >= 100) {
        point += (transaction.purchase - 100) * 2;
        point += 50;
      } else if (transaction.purchase >= 50) {
        point += transaction.purchase - 50;
      }
      points += point;
    }
  });
  return points;
}
console.log(calculation(transactions, 1));
