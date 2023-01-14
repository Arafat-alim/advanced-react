import React, { useEffect, useState } from "react";

function GameApp() {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(5);

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const handleSubmit = (text) => {
    const wordSplit = text.trim().split(" ");
    return wordSplit.filter((word) => word !== "").length;
  };

  //! Useffect
  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
  }, [timeRemaining]);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your Sentence"
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={handleSubmit}>Press Start</button>
      <h1>Word Count: {handleSubmit(text)}</h1>
    </div>
  );
}

export default GameApp;
