import React, { useState } from "react";

function GameApp() {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };
  const handleSubmit = (text) => {
    const wordSplit = text.trim().split(" ");
    return wordSplit.filter((word) => word !== "").length;
  };
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your Sentence"
      />
      <h4>Time Remaining: 10</h4>
      <button onClick={handleSubmit}>Press Start</button>
      <h1>Word Count: {handleSubmit(text)}</h1>
    </div>
  );
}

export default GameApp;
