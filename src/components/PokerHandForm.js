import React from "react";

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
  render() {
    console.log(this.state.playerHand, this.state.opponentHand);
    return (
      <div>
        <form className="form-wrapper">
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
