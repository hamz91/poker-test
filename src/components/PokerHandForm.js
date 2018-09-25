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

    // Change listeners on input fields
    this.handlePlayerChange = this.handlePlayerChange.bind(this);
    this.handleOpponentChange = this.handleOpponentChange.bind(this);

    // Submit listener to perform comparison check
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

    // Minor form validation using input length
    if (
      this.state.playerHand.length === 14 &&
      this.state.opponentHand.length === 14
    ) {
      const playerCards = new pokerHand(this.state.playerHand.toUpperCase());
      const opponentCards = new pokerHand(
        this.state.opponentHand.toUpperCase()
      );

      this.setState({
        result: playerCards.compareWith(opponentCards.hand)
      });
    } else {
      alert("Please enter a correct poker hand");
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.compareHands} className="form-wrapper">
          <p className="form-text"> Your Hand </p>
          <input
            onChange={this.handlePlayerChange}
            value={this.state.playerHand}
            placeholder="2H 3D 5C 6S KH..."
            className="form-input"
          />
          <p className="form-text"> Opponents Hand </p>
          <input
            onChange={this.handleOpponentChange}
            value={this.state.opponentHand}
            placeholder="8D 4D 4H 4S TH..."
            className="form-input"
          />
          <button>Deal</button>
        </form>
        <PokerHandResult result={this.state.result} />
      </div>
    );
  }
}

export default PokerHandForm;
