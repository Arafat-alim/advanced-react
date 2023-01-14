import React, { useEffect, useRef, useState } from "react";
import useWordGame from "./hook/useWordGame";

function GameApp() {
  const {
    text,
    isTimeRunning,
    handleChange,
    textBoxRef,
    timeRemaining,
    startGame,
    countWord,
  } = useWordGame(5);
  return (
    <div>
      <h1>How fast do you type?</h1>
      <textarea
        value={text}
        disabled={!isTimeRunning}
        onChange={handleChange}
        placeholder="Enter your Sentence"
        ref={textBoxRef}
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
