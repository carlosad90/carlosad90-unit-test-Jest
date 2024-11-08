const { fromEuroToDollar, fromDollarToYen, fromYenToGbp } = require("./app.js");
test("Euro to dollar", () => {
  let result = fromEuroToDollar(1000);
  expect(result).toBe(1070);
});

test("Dollar to yen", () => {
  let result = fromDollarToYen(107);
  expect(result).toBe(15650);
});

test("Yen to GBP", () => {
  let result = fromYenToGbp(1565);
  expect(result).toBe(8.7);
});
