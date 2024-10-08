type HangmanWordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  reveal?: boolean;
};

const HangmanWord = ({ reveal = false, guessedLetters, wordToGuess }: HangmanWordProps) => {
  return (
    <div className="flex gap-2 justify-center text-5xl font-bold uppercase font-mono mb-6">
      {wordToGuess.split("").map((letter, index) => (
        <p className="border-b-4 border-black min-w-8 min-h-14" key={index}>
          <span
            className={`${
              guessedLetters.includes(letter.toLowerCase()) || reveal ? "visible" : "hidden"
            } ${!guessedLetters.includes(letter) && reveal ? "text-red-500" : "text-green-400"}`}
          >
            {letter}
          </span>
        </p>
      ))}
    </div>
  );
};

export default HangmanWord;
