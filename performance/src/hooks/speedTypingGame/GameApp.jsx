import React, { useEffect, useState } from "react";

function GameApp() {
  const STARTING_COUNT = 5;
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(STARTING_COUNT);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [countWord, setCountWord] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  const counting = (text) => {
    const wordSplit = text.trim().split(" ");
    return wordSplit.filter((word) => word !== "").length;
  };

  const startGame = () => {
    setIsTimeRunning(true);
    setTimeRemaining(STARTING_COUNT);

    setCountWord(0);
    setText("");
  };
  const endGame = () => {
    setIsTimeRunning(false);
    setCountWord(counting(text));
  };

  //! Useffect
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        disabled={!isTimeRunning}
        onChange={handleChange}
        placeholder="Enter your Sentence"
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start
      </button>
      <h1>Word Count: {countWord}</h1>
    </div>
  );
}

export default GameApp;
