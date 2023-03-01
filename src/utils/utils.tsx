export const initialGuessedWords: Array<Array<string[]>> = [
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
  [[" "], [" "], [" "], [" "], [" "]],
];

export const initialRowsStates: ("unchecked" | "checked")[] = [
  "unchecked",
  "unchecked",
  "unchecked",
  "unchecked",
  "unchecked",
  "unchecked",
];

export const initialLetState: Array<Array<{ let: string; state: string }>> = [
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
  [
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
    { let: "", state: "" },
  ],
];

export const initialLettersStates: {
  correct: string[];
  almost: string[];
  incorrect: string[];
} = {
  correct: [],
  almost: [],
  incorrect: [],
};
