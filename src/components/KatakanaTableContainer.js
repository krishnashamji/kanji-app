import React from 'react';

const KatakanaTableContainer = () => {
  const katakana = [
    ['ア', 'イ', 'ウ', 'エ', 'オ'],
    ['カ', 'キ', 'ク', 'ケ', 'コ'],
    ['サ', 'シ', 'ス', 'セ', 'ソ'],
    ['タ', 'チ', 'ツ', 'テ', 'ト'],
    ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    ['マ', 'ミ', 'ム', 'メ', 'モ'],
    ['ヤ', '', 'ユ', '', 'ヨ'],
    ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    ['ワ', '', '', '', 'ヲ'],
    ['ン', '', '', '', ''],
  ];

  const columns = ['a', 'i', 'u', 'e', 'o'];

  return (
    <table border="1" style={{ borderCollapse: 'collapse', textAlign: 'center' }}>
      <thead>
        <tr>
          <th></th>
          {columns.map((col, index) => (
            <th key={index}>{col}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {katakana.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <th>{columns[rowIndex]}</th>
            {row.map((char, charIndex) => (
              <td key={charIndex}>{char}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default KatakanaTableContainer;
