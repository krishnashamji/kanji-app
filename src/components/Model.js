import React, { useState, useEffect } from "react";
import { getSpeficKanjiData } from "../network/network";

function Model({ modelButton, setModelButton, selectedKanji }) {
  const [specificKajiData, setSpecificKajiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedKanji) return;
      const speficKanjiData = await getSpeficKanjiData(selectedKanji);
      setSpecificKajiData(speficKanjiData.data);
    };

    fetchData();
  }, [selectedKanji]);

  if (!specificKajiData) return null;

  return modelButton ? (
    <div className="model-background">
      <div className="model-inner">
        <button className="close-button" onClick={() => setModelButton(false)}>
          close
        </button>
        <h3>{selectedKanji}</h3>
        <div className="labelAndContent">
          <p className="label">English Meaning</p>
          <p className="labelContent">{specificKajiData.meanings.join(", ")}</p>
        </div>
        <div className="labelAndContent">
          <p className="label">Kun</p>
          <p className="labelContent">{specificKajiData.kun_readings.join(", ")}</p>
        </div>
        <div className="labelAndContent">
          <p className="label">On</p>
          <p className="labelContent">{specificKajiData.on_readings.join(", ")}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Model;

