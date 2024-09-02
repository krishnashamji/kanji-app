import "../App.css";
// import React, {useState, useEffect} from 'react';
// import { getSpeficKanjiData } from "../network/network";

const KanjiCharacter = ({ character, setModelButton, setSelectedKanji }) => {
  

  return (
    <div className="kanji-character">
      <button className="kanji-character-button"
        onClick={() => {
          setModelButton(true);
          setSelectedKanji(character);
          // setSpecificKajiData();
        }}
      >
        {character}
      </button>      
    </div>
  );
};

export default KanjiCharacter;
