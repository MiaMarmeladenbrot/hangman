const HEAD = (
  <div className="h-[50px] w-[50px] border-8 border-black rounded-full absolute top-[25px] right-[-20px]" />
);

const BODY = <div className="h-[100px] w-[10px] bg-black absolute top-[70px] right-0" />;

const RIGHT_ARM = (
  <div className="h-[10px] w-[60px] bg-black absolute top-[100px] right-[-50px] rotate-[30deg]" />
);

const LEFT_ARM = (
  <div className="h-[10px] w-[60px] bg-black absolute top-[100px] right-0 rotate-[-30deg]" />
);

const RIGHT_LEG = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[195px] right-[-55px] rotate-[60deg]" />
);

const LEFT_LEG = (
  <div className="h-[10px] w-[80px] bg-black absolute top-[195px] right-[-15px] rotate-[-60deg]" />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
  return (
    <div className="relative max-w-[320px] mb-6">
      {/* drawing of the body */}
      {BODY_PARTS.slice(0, numberOfGuesses)}

      {/* drawing of the hangman */}
      <div className="h-[30px] w-[10px] bg-black absolute top-0 right-0" />
      <div className="h-[10px] w-[120px] bg-black ml-[70px]" />
      <div className="h-[250px] w-[10px] bg-black ml-[70px]" />
      <div className="h-[10px] w-[150px] bg-black" />
    </div>
  );
};

export default HangmanDrawing;
