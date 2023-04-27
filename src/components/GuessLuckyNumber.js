import React, { useState } from 'react';
import './GuessLuckyNumber.css';

export default function GuessLuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(Math.floor(Math.random() * 10) + 1);
  const [guess, setGuess] = useState('');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleButtonClick = () => {
    const num = parseInt(guess);
    if (isNaN(num) || num < 1 || num > 10) {
      setMessage('Please enter a number between 1 and 100.');
      return;
    }
    setCount(count + 1);
    if (num < luckyNumber) {
      setMessage('You guessed a smaller number.');
    } else if (num > luckyNumber) {
      setMessage('You guessed a bigger number.');
    } else {
      setMessage(`Congratulations! You guessed the right number in ${count + 1} attempts.`);
      setGuess('');
      setLuckyNumber(Math.floor(Math.random() * 10) + 1);
      setCount(0);
    }
  };

  return (
    <div className="guess-lucky-number">
      <h1>Guess the Lucky Number</h1>
      <div className="guess-container">
        <label htmlFor="guess-input">Guess a number between 1 and 10:</label>
        <input type="number" id="guess-input" value={guess} onChange={handleInputChange} />
        <button onClick={handleButtonClick}>Guess</button>
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
}