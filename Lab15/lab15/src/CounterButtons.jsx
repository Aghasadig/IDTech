import React from "react";

const CounterButtons = ({ onDecrement, onReset, onIncrement, onTogglePause, pause }) => {
  return (
    <div className="buttons">
      <button onClick={onDecrement}>-1</button>
      <button onClick={onReset}>Reset</button>
      <button onClick={onIncrement}>+1</button>
      <button onClick={onTogglePause}>
        {pause ? "Start Auto-Count" : "Stop Auto-Count"}
      </button>
    </div>
  );
};

export default CounterButtons;