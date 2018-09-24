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

  isRoyalFlush(hand) {
    let royalFlush = 10;
    if (!this.isFlush(hand)) return 0;

    const sortedHand = this.sortByValueAsc(hand);
    if (sortedHand[0].value === 10) {
      return royalFlush;
    } else return 0;
  }

  isFlush(hand) {
    let flush = 6;
    hand.forEach(card => {
      if (card.suit !== hand[0].suit) flush = 0;
    });
    return flush;
  }

  isStraightFlush(hand) {
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
    let straight = 5;
    for (let i = 0; i < sortedHand.length - 1; i++) {
      if (sortedHand[i].value !== sortedHand[i + 1].value - 1) straight = 0;
    }
    return straight;
  }

  duplicateCounter(hand) {
    let tempCount = 1;
    let counter = 1;
    const sortedHand = this.sortByValueAsc(hand);

    for (let i = 0; i < sortedHand.length - 1; i++) {
      if (sortedHand[i].value === sortedHand[i + 1].value) tempCount++;
      else {
        counter = Math.max(tempCount, counter);
        tempCount = 1;
      }
    }
    return counter;
  }

  isFourKind(hand) {
    let fourKind = 8;
    if (this.duplicateCounter(hand) === 4) {
      return fourKind;
    } else return 0;
  }

  isThreeKind(hand) {
    let threeKind = 4;
    if (this.duplicateCounter(hand) === 3) {
      return threeKind;
    } else return 0;
  }

  isPair(hand) {
    let pair = 2;
    if (this.duplicateCounter(hand) === 2) {
      return pair;
    } else return 0;
  }

  isTwoPair(hand) {
    let twoPair = 3;
  }

  isFullHouse(hand) {
    let fullHouse = 7;
    if (this.duplicateCounter(hand) === 3) {
      let tempCount = 1;
      let counter = 1;
      for (let i = 0; i < hand.length - 1; i++) {
        if (hand[i].value === hand[i + 1].value) {
          tempCount++;
        } else {
          if (tempCount === 2) {
            counter = 2;
          }
          tempCount = 1;
        }
      }
      if (counter === 2) {
        return fullHouse;
      } else return 0;
    } else return 0;
  }
}

module.exports = PokerHand;
