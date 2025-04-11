import React, { useEffect, useState } from "react";
import "./App.css";
import CounterButtons from "./CounterButtons";

const App = () => {
  const [count, setCount] = useState(0);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pause) {
        setCount((prev) => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [pause]);

  const getColor = () => {
    if (count < 0) return "red";
    if (count > 0) return "green";
    return "black";
  };

  const counterStyle = {
    color: getColor(),
    fontSize: "48px",
    transition: "color 0.3s ease",
  };

  return (
    <div className="mainContainer">
      <div className="counterScreen">
        <p style={counterStyle}>{count}</p>
      </div>

      <CounterButtons
        onDecrement={() => setCount((prev) => prev - 1)}
        onReset={() => setCount(0)}
        onIncrement={() => setCount((prev) => prev + 1)}
        onTogglePause={() => setPause((prev) => !prev)}
        pause={pause}
      />
    </div>
  );
};

export default App;
