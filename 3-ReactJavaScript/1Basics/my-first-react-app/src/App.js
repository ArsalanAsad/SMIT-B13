import React, { useState } from 'react';
import './App.css'; // <-- Import the CSS file

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container">
      <h1>Hello, React 👋</h1>
      <p>Welcome to your first React app!</p>

      <h2>Click Counter</h2>
      <p>You clicked <strong>{count}</strong> times</p>

      <button onClick={handleClick} className="click-btn">
        Click Me
      </button>

      <button onClick={handleReset} className="reset-btn">
        Reset
      </button>
    </div>
  );
}

export default App;
