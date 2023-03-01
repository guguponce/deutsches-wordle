export interface iCell {
  cellIndex: number;
  rowIndex: number;
  cell: string[];
  row: string;
  rowsStates: ("checked" | "unchecked")[];
  letState: React.MutableRefObject<
    {
      let: string;
      state: string;
    }[][]
  >;
  currentRow: React.MutableRefObject<number>;
  currentCell: string;
}

export interface iRow {
  inputWord: string;

  row: string;
  rowsStates: ("checked" | "unchecked")[];
  letState: React.MutableRefObject<
    {
      let: string;
      state: string;
    }[][]
  >;
  currentRow: React.MutableRefObject<number>;
  rowIndex: number;
  rowAnimation: boolean;
  guessedWords: string[][][];
}
