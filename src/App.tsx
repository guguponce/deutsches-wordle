import React, { useCallback, useEffect, useRef, useState } from "react";
import "./styles/App.scss";
import { filteredWords, allWords } from "./utils/words";
import {
  initialGuessedWords,
  initialRowsStates,
  initialLetState,
  initialLettersStates,
} from "./utils/utils";
import Row from "./components/Row";
import Modal from "./components/Modal";
import ModalInstructions from "./components/modals/ModalInstructions";

const todaysWord = [...filteredWords].sort(() => Math.random() - 0.5)[0];
function App() {
  const [inputWord, setInputWord] = useState("");
  const currentRow = useRef<number>(0);

  const [rowAnimation, toggleRowAnimation] = useState(false);
  const [gameFinished, toggleGameFinished] = useState(false);
  const [guessedWords, setGuessedWords] = useState(initialGuessedWords);
  const [rowsStates, setRowsStates] = useState(initialRowsStates);
  const letState = useRef(initialLetState);
  const lettersStates = useRef(initialLettersStates);
  const [modalInstructions, toggleModalInstructions] = useState(true);
  const [modalStatistics, toggleModalStatistics] = useState(false);

  // ---------------functions---------------------------------

  const checkValidWord = useCallback((word: string) => {
    if (word === todaysWord) {
      toggleRowAnimation(true);
      setRowsStates((rows) =>
        rows.map((rowState, rowIndex) =>
          rowIndex === currentRow.current ? "checked" : rowState
        )
      );
      toggleGameFinished(true);
      assignLettersState();
    } else if (allWords.includes(word)) {
      if (currentRow.current < 6) {
        setRowsStates((rows) =>
          rows.map((rowState, rowIndex) =>
            rowIndex === currentRow.current - 1 ? "checked" : rowState
          )
        );
        assignLettersState();
        for (let i = 0; i < guessedWords.length; i++) {
          const row = guessedWords[i];
          if (row[0][0] === " ") {
            setInputWord("");
            currentRow.current = i;
            break;
          } else if (currentRow.current === 6) {
            toggleGameFinished(true);
          }
        }
      }
    } else {
    }

    return word;
  }, []);

  function assignLettersState() {
    guessedWords.forEach((row, rowIndex) => {
      if (row[0][0] !== " ") {
        let word = todaysWord;
        row.forEach((cell, cellI) => {
          if (cell[0] === word[cellI]) {
            lettersStates.current.correct = [
              ...lettersStates.current.correct,
              cell[0],
            ];
            letState.current[rowIndex][cellI] = {
              let: cell[0],
              state: "correct",
            };
            word =
              typeof word === "string"
                ? word
                    .split("")
                    .map((letter, i) => (i === cellI ? "." : letter))
                    .join("")
                : word;
          }
        });
        row.forEach((cell, cellI) => {
          if (letState.current[rowIndex][cellI].state === "") {
            if (
              // word[cellI] !== "." &&
              word.includes(cell[0])
            ) {
              console.log("includes");

              letState.current[rowIndex][cellI] = {
                let: cell[0],
                state: "almost",
              };
              let newWord = (word as string).split("");
              newWord[word.indexOf(cell[0])] = ".";
              word = newWord.join("");

              lettersStates.current.almost = [
                ...lettersStates.current.almost,
                cell[0],
              ];
            } else {
              letState.current[rowIndex][cellI] = {
                let: cell[0],
                state: "incorrect",
              };
              lettersStates.current.incorrect = [
                ...lettersStates.current.incorrect,
                cell[0],
              ];
            }
          }
        });
      }
    });
  }

  const keyPressed = useCallback((e: KeyboardEvent) => {
    e = e;

    setInputWord((word) => {
      if (/Enter/.test(e!.key)) {
        checkValidWord(word);

        return word;
      } else if (
        /[a-zA-Züöä]/.test(e!.key) &&
        e!.key.length === 1 &&
        word.length < 5
      ) {
        return word + e!.key.toUpperCase();
      } else if (/Backspace/.test(e!.key)) {
        return word.substring(0, word.length - 1);
      } else {
        return word;
      }
    });
  }, []);

  function handleKeyboard(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> & {
      target: HTMLButtonElement;
    }
  ) {
    setInputWord((word) => {
      if (/ENTER/.test(e.target.id)) {
        checkValidWord(word);
        return word;
      } else if (
        /[a-zA-Züöä]/.test(e.target.id) &&
        e.target.id.length === 1 &&
        word.length < 5
      ) {
        return word + e.target.id.toUpperCase();
      } else if (/DEL/.test(e.target.id)) {
        return word.substring(0, word.length - 1);
      } else {
        return word;
      }
    });
  }
  // ---------------useEffects---------------------------------

  useEffect(() => {
    // console.log("todaysWord", todaysWord);
  }, []);

  useEffect(() => {}, [rowAnimation]);

  useEffect(() => {
    document.addEventListener("keydown", keyPressed);
    return document.removeEventListener("keydown", (e) => e);
  }, []);

  useEffect(() => {
    const inputArr = inputWord.split("");
    setGuessedWords((prev) => {
      let currentGuesses = [...guessedWords];
      let row = currentGuesses[currentRow.current];
      for (let index = 0; index < 5; index++) {
        const letter = inputArr[index] ? inputArr[index] : " ";
        row[index] = [letter];
      }
      currentGuesses[currentRow.current] = row;
      return currentGuesses;
    });
  }, [inputWord]);
  return (
    <div className="App">
      {modalInstructions && (
        <Modal closeModal={()=>toggleModalInstructions(false)}>
          <ModalInstructions></ModalInstructions>
        </Modal>
      )}
      <header>
        <h1 id="title" className="animate__animated animate__bounce">
          WORDLE
        </h1>
        <div id="icons-container-header">
          <button
            id="instructions"
            onClick={()=>toggleModalInstructions(true)}
            style={{
              backgroundImage: `url("https://img.icons8.com/material-outlined/24/000000/help.png")`,
            }}
          />
          <button
            className="statistics"
            style={{
              backgroundImage: `url("https://img.icons8.com/ios-filled/50/000000/laptop-metrics.png")`,
            }}
          />
          <button
            className="setting"
            style={{
              backgroundImage: `url("https://img.icons8.com/material-outlined/96/000000/settings--v1.png")`,
            }}
          />
        </div>
      </header>

      <div id="game-app">
        <main>
          <div id="board-container">
            <div id="main-board">
              {["first", "second", "third", "fourth", "fifth", "sixth"].map(
                (row, rowIndex: number) => (
                  <React.Fragment key={"row" + rowIndex}>
                    <Row
                      rowIndex={rowIndex}
                      rowAnimation={rowAnimation}
                      guessedWords={guessedWords}
                      currentRow={currentRow}
                      letState={letState}
                      row={row}
                      rowsStates={rowsStates}
                      inputWord={inputWord}
                    />
                  </React.Fragment>
                )
              )}
            </div>
          </div>
          <div id="keyboard">
            {[
              ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ü"],
              ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ö", "Ä"],
              ["ENTER", "Y", "X", "C", "V", "B", "N", "M", "DEL"],
            ].map((keyboardRow, i) => (
              <div
                key={keyboardRow.join("")}
                className={`keyRow ${keyboardRow}`}
              >
                {keyboardRow.map((letter) => (
                  <button
                    key={letter}
                    style={{
                      backgroundColor: `${
                        lettersStates.current.correct.includes(letter)
                          ? "#6aaa64"
                          : lettersStates.current.almost.includes(letter)
                          ? "#ffc600"
                          : lettersStates.current.incorrect.includes(letter)
                          ? "#787c7e"
                          : "#d3d6da"
                      }`,
                    }}
                    className="tecla butt"
                    id={letter}
                    onClick={handleKeyboard}
                  >
                    {letter === "DEL" ? "" : letter}
                  </button>
                ))}
              </div>
            ))}
          </div>
        </main>
      </div>
      {/* 
      <ul>
        <li>multiple matches</li>
        <li>card</li>
        <li>style classes(correct)</li>
        <li>localstorage</li>
      </ul> */}
    </div>
  );
}

export default App;
