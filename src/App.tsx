import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import "./index.css";
import HangmanDrawing from "./Components/HangmanDrawing";
import HangmanWord from "./Components/HangmanWord";
import Keyboard from "./Components/Keyboard";

function App() {
  const getWord = () => {
    return words[Math.floor(Math.random() * words.length)];
  };

  const [wordToGuess, setWordToGuess] = useState(getWord);
  console.log(wordToGuess);

  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.split("").every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return;

      setGuessedLetters((currLetter) => [...currLetter, letter]);
    },
    [guessedLetters, isWinner, isLoser]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  const refreshWord = (e: React.MouseEvent) => {
    e.preventDefault();

    setGuessedLetters([]);
    setWordToGuess(getWord);
  };

  return (
    <div className="flex flex-col gap-2 items-center justify-center text-center mt-10 mx-2">
      <h1 className="text-2xl font-bold mb-10">Guess the word!</h1>

      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />

      {(isWinner || isLoser) && (
        <div className="flex items-center gap-10 mb-10 ">
          {isWinner && <p className="text-2xl font-bold mb-2 text-green-500">You have won!</p>}
          {isLoser && <p className="text-2xl font-bold mb-2 text-red-500">Try again!</p>}
          <button
            onClick={refreshWord}
            className=" border-2 border-blue-400 rounded-md px-2 py-1 text-xl text-blue-400 font-bold"
          >
            Refresh
          </button>
        </div>
      )}

      <Keyboard
        disabled={isWinner || isLoser}
        activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
        inactiveLetters={incorrectLetters}
        addGuessedLetter={addGuessedLetter}
      />
    </div>
  );
}

export default App;
