import React, { useState, useRef } from 'react';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  const start = () => {
    if (countRef.current !== null) return;
    countRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(countRef.current);
    countRef.current = null;
  };

  const stop = () => {
    clearInterval(countRef.current);
    countRef.current = null;
    setCount(0);
  };

  return (
    <div>
      <h1>React Counter</h1>
      <p>Count: {count}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={stop}>Stop</button>
    </div>
  );
}

export default App