import React, { useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { iRow } from "../utils/interfaces";
import Cell from "./Cell";

export default function Row({
  rowIndex,
  rowAnimation,
  guessedWords,
  row,
  rowsStates,
  letState,
  currentRow,
  inputWord,
}: iRow) {
  const currentCell = useRef<string>("");

  useEffect(() => {
    currentCell.current = currentRow.current + "" + (inputWord.length - 1);
  }, [inputWord]);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={rowAnimation}
      timeout={5000}
      classNames={currentRow.current === rowIndex ? "jump" : ""}
      appear
      nodeRef={nodeRef}
    >
      <div
        key={`row${rowIndex + 1}`}
        ref={nodeRef}
        id={`row${rowIndex + 1}`}
        className={`row row${rowIndex + 1}`}
      >
        {guessedWords[rowIndex].map((cell, cellIndex: number) => {
          return (
            <React.Fragment key={rowIndex + "cell" + cellIndex}>
              <Cell
                letState={letState}
                currentRow={currentRow}
                row={row}
                rowIndex={rowIndex}
                cell={cell}
                cellIndex={cellIndex}
                rowsStates={rowsStates}
                currentCell={currentCell.current}
              />
            </React.Fragment>
          );
        })}
      </div>
    </CSSTransition>
  );
}
