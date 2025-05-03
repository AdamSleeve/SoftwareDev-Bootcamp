import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0); // State to track counter value
  const maxLimit = 10; // Example limit for edge case handling

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <p className="counter-display">{count}</p>
      {count >= maxLimit && <p className="limit-message">You've reached the limit!</p>}
      <div className="buttons">
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increase</button>
        <button onClick={() => setCount(prevCount => Math.max(0, prevCount - 1))}>Decrease</button>
      </div>
    </div>
  );
};

export default App;
