import React from "react";

export default function ModalGameFinished({
  result,
  timesGuessed,
  todaysWord,
}: {
  result: "guessed" | "notGuessed" | "";
  timesGuessed: number;
  todaysWord: string | string[];
}) {
  const guessNumber =
    timesGuessed === 1
      ? "first"
      : timesGuessed === 2
      ? "second"
      : timesGuessed === 3
      ? "third"
      : timesGuessed === 4
      ? "fourth"
      : timesGuessed === 5
      ? "fifth"
      : "sixth";
  return (
    <div id="game-finished">
      {result === "guessed" ? (
        <div id="guessed-result">
          <h2>Congratulations!</h2>
          <h3>You made it on your {guessNumber} guess</h3>
        </div>
      ) : (
        <div id="not-guessed-result">
          <h2>Good luck next time!</h2>
          <h3>The word was: <span>{todaysWord}</span></h3>
        </div>
      )}
    </div>
  );
}
