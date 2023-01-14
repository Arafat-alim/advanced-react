import { useState, useRef, useEffect } from "react";

function useWordGame(startingCount = 10) {
  const [text, setText] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(startingCount);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [countWord, setCountWord] = useState(0);
  const textBoxRef = useRef(null);

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
    setTimeRemaining(startingCount);

    setCountWord(0);
    setText("");
    textBoxRef.current.disabled = false;
    textBoxRef.current.focus();
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

  return {
    text,
    isTimeRunning,
    handleChange,
    textBoxRef,
    timeRemaining,
    startGame,
    countWord,
  };
}

export default useWordGame;
