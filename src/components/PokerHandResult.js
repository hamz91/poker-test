import React from "react";

function PokerHandResult({ result }) {
  return (
    <div className="results">
      <h4 className="results__score">{result.result}</h4>
      <h3 className="results__hand">{result.description}</h3>
    </div>
  );
}

export default PokerHandResult;
