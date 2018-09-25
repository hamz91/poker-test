import React from "react";

function PokerHandResult({ result }) {
  return (
    <div className="results">
      <p>Results will appear below...</p>
      <h4 className="results__score">
        <i>{result.result}</i>
      </h4>
      <h3 className="results__hand">
        <b>{result.description}</b>
      </h3>
    </div>
  );
}

export default PokerHandResult;
