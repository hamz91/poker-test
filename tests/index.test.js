const pokerHand = require("../src/components/pokerSourceCode");

test("result", function() {
  const hand1 = new pokerHand("6C 6H 4S 2C 4C");
  const hand2 = new pokerHand("5S 4H 6C 2D 8S");
  const expected = {
    result: 1,
    description: "You won with a Pair"
  };
  const result = hand1.compareWith(hand2.hand);
  expect(result).toEqual(expected);
});

test("pair", function() {
  const hand1 = new pokerHand("6C 6H 7S 2C 4S");
  const expected = 2;
  const result = hand1.isPair(hand1.hand);
  expect(result).toEqual(expected);
});

test("two pair", function() {
  const hand1 = new pokerHand("6C 6H 7S 7C 4S");
  const expected = 3;
  const result = hand1.isTwoPair(hand1.hand);
  expect(result).toEqual(expected);
});

test("straight flush", function() {
  const hand1 = new pokerHand("6C 8C 7C 9C 5C");
  const expected = 9;
  const result = hand1.isStraightFlush(hand1.hand);
  expect(result).toEqual(expected);
});

// Following two tests fail even though the hands work in browser/live test. Need to fix --

test("four of a kind", function() {
  const hand1 = new pokerHand("6C 6H 6S 6D 4S");
  const expected = 8;
  const result = hand1.isFourKind(hand1.hand);
  expect(result).toEqual(expected);
});

test("full house", function() {
  const hand1 = new pokerHand("6C 6H 6S 4D 4S");
  const expected = 7;
  const result = hand1.isFullHouse(hand1.hand);
  expect(result).toEqual(expected);
});
