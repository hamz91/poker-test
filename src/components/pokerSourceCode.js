class PokerHand {
  constructor(inputData) {
    this.hand = inputData.split(" ").map(card => {
      let currentCard = {
        suit: card[1]
      };
      if (card[0] === "A") currentCard.value = 14;
      else if (card[0] === "K") currentCard.value = 13;
      else if (card[0] === "Q") currentCard.value = 12;
      else if (card[0] === "J") currentCard.value = 11;
      else if (card[0] === "T") currentCard.value = 10;
      else currentCard.value = Number(card[0]);

      return currentCard;
    });
  }
  sortByValueAsc(hand) {
    return hand.slice(0).sort((a, b) => a.value - b.value);
  }
  isFlush(hand) {
    let flush = 5;
    hand.forEach(card => {
      if (card.suit !== hand[0].suit) flush = 0;
    });
    return flush;
  }

  isStriaghtFlush(hand) {
    if (!this.isFlush(hand)) return 0;
    const sortedHand = this.sortByValueAsc(hand);
    let straightFlush = 9;
    for (let i = 0; i < sortedHand.length - 1; i++) {
      if (sortedHand[i].value !== sortedHand[i + 1].value - 1)
        straightFlush = 0;
    }
    return straightFlush;
  }

  isStraight(hand) {
    const sortedHand = this.sortByValueAsc(hand);
    let straight = 4;
    for (let i = 0; i < sortedHand.length - 1; i++) {
      if (sortedHand[i].value !== sortedHand[i + 1].value - 1) straight = 0;
    }
    return straight;
  }
}

module.exports = PokerHand;
