import React from "react";

export default function ModalInstructions() {
  return (
    <div id="instructions">
      <h1>Anleitung</h1>
      <h3>Errate das Wordle in 6 Versuchen.</h3>
      <ul>
        <li> Jeder Tipp muss ein gültiges Wort mit 5 Buchstaben sein.</li>
        <li>
          Die Farbe der Kacheln ändert sich, um anzuzeigen, wie nahe du dem Wort
          gekommen bist.
        </li>
      </ul>
      <h4>Beispiele</h4>
      <div className="example-cells">
        <div className="example-cell correct">N</div>
        <div className="example-cell">E</div>
        <div className="example-cell">B</div>
        <div className="example-cell">E</div>
        <div className="example-cell">N</div>
      </div>
      <p>
        <strong>N</strong> is in the word and in the correct spot.
      </p>
      <div className="example-cells">
        <div className="example-cell">D</div>
        <div className="example-cell almost">A</div>
        <div className="example-cell">H</div>
        <div className="example-cell">E</div>
        <div className="example-cell">R</div>
      </div>
      <p>
        <strong>A</strong> ist im Wort enthalten, aber an der falschen Stelle.
      </p>
      <div className="example-cells">
        <div className="example-cell">S</div>
        <div className="example-cell">T</div>
        <div className="example-cell incorrect">A</div>
        <div className="example-cell">R</div>
        <div className="example-cell">T</div>
      </div>
      <p>
        <strong>A</strong> ist an keiner Stelle im Wort enthalten.
      </p>
      {/* <p>Täglich um Mitternacht wird ein neues Rätsel veröffentlicht. Wenn Sie es noch nicht getan haben, können Sie sich für unsere tägliche Erinnerungs-E-Mail anmelden.</p> */}
    </div>
  );
}
