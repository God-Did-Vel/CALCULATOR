import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    const operators = ['+', '-', '*', '/'];
    const lastChar = input.slice(-1);

    if (
      operators.includes(value) &&
      (input === '' || operators.includes(lastChar))
    ) {
      if (!(value === '-' && input === '')) return;
      if (!(value === '-' && operators.includes(lastChar))) return;
      return;
    }

    setInput(input + value);
  };

  const handleClear = () => setInput('');

  const handleCalculate = () => {
    if (!input) return;
    try {
      
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">Calculator</h1>
      <div className="calculator">
        <div className="display">{input || '0'}</div>
        <div className="buttons">
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('/')}>÷</button>

          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('*')}>×</button>

          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('-')}>−</button>

          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={handleCalculate}>=</button>
          <button onClick={() => handleClick('+')}>+</button>

          <button className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
