import React from "react";

const HiraganaTableContainer = () => {
  const hiragana = [
    ["あ", "い", "う", "え", "お"],
    ["か", "き", "く", "け", "こ"],
    ["さ", "し", "す", "せ", "そ"],
    ["た", "ち", "つ", "て", "と"],
    ["な", "に", "ぬ", "ね", "の"],
    ["は", "ひ", "ふ", "へ", "ほ"],
    ["ま", "み", "む", "め", "も"],
    ["や", "", "ゆ", "", "よ"],
    ["ら", "り", "る", "れ", "ろ"],
    ["わ", "", "", "", "を"],
    ["ん", "", "", "", ""],
  ];

  const columns = ["a", "i", "u", "e", "o"];

  return (
    <div className="hiragana-container">
      <table
        border="1"
        style={{ borderCollapse: "collapse", textAlign: "center" }}
      >
        <thead>
          <tr>
            <th></th>
            {columns.map((col, index) => (
              <th key={index}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {hiragana.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <th>{columns[rowIndex]}</th>
              {row.map((char, charIndex) => (
                <td key={charIndex}>{char}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HiraganaTableContainer;
