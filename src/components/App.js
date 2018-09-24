import React from "react";
import Header from "./Header";
import PokerHandForm from "./PokerHandForm";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <PokerHandForm />
      </div>
    );
  }
}

export default App;
