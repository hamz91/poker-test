const functions = require("../src/components/pokerSourceCode");

test("result", function() {
  const hand1 = new PokerHand("6C 6H 6S 2C 4S");
  const hand2 = new PokerHand("5S 4H 6C 2D 8S");
  const expected = {
    result: result.win,
    description: "You won with a Three of a Kind"
  };
  const result = functions.hand1.compareWith(hand2);
  expect(result).toBe(expected);
});
