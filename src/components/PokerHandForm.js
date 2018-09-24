import React from "react";

const result = { win: 1, loss: 2, tie: 3 };
const pokerHand = require("./pokerSourceCode");

class PokerHandForm extends React.Component {
  constructor() {
    super();

    this.state = {
      playerHand: "",
      opponentHand: "",
      result: 0
    };

    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleOpponentChange = this.handleOpponentChange.bind(this);
    this.compareHands = this.compareHands.bind(this);
  }

  handlePlayerChange(event) {
    this.setState({
      playerHand: event.target.value
    });
  }

  handleOpponentChange(event) {
    this.setState({
      opponentHand: event.target.value
    });
  }

  compareHands(event) {
    event.preventDefault();

    const playerCards = new pokerHand(this.state.playerHand);
    const opponentCards = new pokerHand(this.state.opponentHand);

    console.log(playerCards.hand);
    // console.log("opp", opponentCards.hand);

    console.log("royal flush", playerCards.isRoyalFlush(playerCards.hand));
    console.log(
      "straight flush",
      playerCards.isStraightFlush(playerCards.hand)
    );
    console.log("flush", playerCards.isFlush(playerCards.hand));
    console.log("straight", playerCards.isStraight(playerCards.hand));
    console.log("full house", playerCards.isFullHouse(playerCards.hand));
    console.log("dupes", playerCards.duplicateCounter(playerCards.hand));

    console.log("four kind", playerCards.isFourKind(playerCards.hand));
    console.log("three kind", playerCards.isThreeKind(playerCards.hand));
    // console.log("two pair", playerCards.isTwoPair(playerCards.hand));
    console.log("pair", playerCards.isPair(playerCards.hand));
    // console.log("high card", playerCards.isHighCard(playerCards.hand));

    // playerCards.compareWith(opponentCards);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.compareHands} className="form-wrapper">
          <p> Your Hand: </p>
          <input
            onChange={this.handlePlayerChange}
            value={this.state.playerHand}
            placeholder="2H 3D 5C 6S KH..."
            className="form-input"
          />
          <p> Opponents Hand: </p>
          <input
            onChange={this.handleOpponentChange}
            value={this.state.opponentHand}
            placeholder="8D 4D 4H 4S TH..."
            className="form-input"
          />
          <button>Submit</button>
        </form>
        {/* <PokerHandResult result={this.state.result} /> */}
      </div>
    );
  }
}

export default PokerHandForm;
