var Result = { win: 1, loss: 2, tie: 3 };

var PokerHand = function() {};

class PokerHand {
  constructor(hand) {
    this.hand = hand;
  }

  //functions that check hand score
}

const hand1 = new PokerHand("5S 6H 6S 2C 4S");
const hand2 = new PokerHand("5H 6H 6S 2C 4S");

PokerHand.prototype.compareWith = function() {
  return Result.tie;
};

hand1.compareWith(hand2);
