import React, { useEffect, useRef, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { iCell } from "../utils/interfaces";
export default function Cell({
  cellIndex,
  rowIndex,
  cell,
  row,
  rowsStates,
  letState,
  currentRow,
  currentCell,
}: iCell) {
  const [outline, toggleOutline] = useState(false);

  const cellref = useRef(null);
  return (
    <div
      ref={cellref}
      key={`cell${cellIndex + 1}`}
      className={`cell cell${cellIndex + 1} ${row}`}
      style={{
        backgroundColor: `${
          rowsStates[rowIndex] === "unchecked"
            ? "transparent"
            : letState.current[rowIndex][cellIndex]["state"] === "correct"
            ? "#6aaa64"
            : letState.current[rowIndex][cellIndex]["state"] === "almost"
            ? "#ffc600"
            : "#787c7e"
        }`,

        outlineColor: `${
          rowsStates[rowIndex] === "unchecked"
            ? "#ddd"
            : letState.current[rowIndex][cellIndex]["state"] === "correct"
            ? "#6aaa64"
            : letState.current[rowIndex][cellIndex]["state"] === "almost"
            ? "#ffc600"
            : "#787c7e"
        }`,
        border: "0px",
        color: `${currentRow.current > rowIndex ? "#fefefe" : "#121212"}`,
      }}
    >
      {cell[0]}
    </div>
  );
}
