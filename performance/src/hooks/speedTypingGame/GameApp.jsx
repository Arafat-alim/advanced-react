import React, { useEffect, useState } from "react";

function GameApp() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const counting = (text) => {
    const wordSplit = text.trim().split(" ");
    return wordSplit.filter((word) => word !== "").length;
  };

  //! Useffect
  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else if (isTimeRunning === 0) {
      setIsTimeRunning(false);
    }
  }, [timeRemaining, isTimeRunning]);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your Sentence"
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setIsTimeRunning(true)}>Press Start</button>
      <h1>Word Count: {counting(text)}</h1>
    </div>
  );
}

export default GameApp;
