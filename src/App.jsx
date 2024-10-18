import React, { useState } from 'react';
import './index.css';

const App = () => {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    setInput((prev) => (prev === '0' ? value : prev + value));
  };

  const clearInput = () => setInput('0');

  const calculateResult = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="container">
      <h1>CALCULATOR</h1>
      <div className="calculator">
        <div className="display">{input}</div>
        <div className="buttons">
          <button onClick={() => handleClick('(')}>(</button>
          <button onClick={() => handleClick(')')}>)</button>
          <button onClick={clearInput}>AC</button>
          <button onClick={() => handleClick('/')}>/</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={clearInput}>C</button>
          <button onClick={calculateResult}>=</button>
        </div>
      </div>
    </div>
  );
};

export default App;




