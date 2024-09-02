import { useState, useEffect } from "react";
import "../App.css";
import paginate from "../utils/pageination.js";
import KanjiCharacter from "./KanjiCharacter.js";
import { getKanjiData } from "../network/network.js";
import Model from "./Model.js";

const KanjiContainer = () => {
  const [kanjiData, setKanjiData] = useState(null);
  const [modelButton, setModelButton] = useState(false);
  const [selectedKanji, setSelectedKanji] = useState("");
  // const [specificKajiData, setSpecificKajiData] = useState("");

  // const [page, setPage] = useEffect(0);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getKanjiData();
      setKanjiData(data.data);
      // console.log(data)
    };
    fetchData();
  }, []);

  if (!kanjiData) {
    return <div>Loading...</div>;
  }


  const paginatedData = paginate(kanjiData, 140, 0);
  // console.log(paginatedData);

  return (
    <div className="kanji-container">
      {paginatedData.map((kanji) => (
        <KanjiCharacter
          key={kanji}
          character={kanji}
          setModelButton={setModelButton}
          setSelectedKanji={setSelectedKanji}
          // selectedKanji={selectedKanji}
        />
      ))}

      {selectedKanji ? <Model
        modelButton={modelButton}
        setModelButton={setModelButton}
        selectedKanji={selectedKanji}
      /> : ""}
    </div>
  );
};

export default KanjiContainer;


