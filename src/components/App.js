import React from "react";
import Header from "./Header";
import PokerHandForm from "./PokerHandForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PokerHandForm />
        <footer>
          <h4>Remember To Gamble Responsibly, Kids!</h4>
        </footer>
      </div>
    );
  }
}

export default App;
