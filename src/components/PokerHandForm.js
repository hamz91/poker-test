import React from "react";
import PokerHandResult from "./PokerHandResult";

const pokerHand = require("./pokerSourceCode");

class PokerHandForm extends React.Component {
  constructor() {
    super();

    this.state = {
      playerHand: "",
      opponentHand: "",
      result: {}
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

    console.log("finalFLASH", playerCards.finalValue(playerCards.hand));

    this.setState({
      result: playerCards.compareWith(opponentCards.hand)
    });
  }

  render() {
    console.log(this.state.result);
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
        <PokerHandResult result={this.state.result} />
      </div>
    );
  }
}

export default PokerHandForm;
