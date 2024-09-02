import "./App.css";
import { KanjiPage } from "./pages/kanjiPage.js";
import { HiraganaPage } from "./pages/hiraganaPage.js";
import { KatakanaPage } from "./pages/katakanaPage.js";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/nav-bar.js";

// UI GENERATION
function App() {
  return (
    <div className="background">
      <NavBar/>
      <Routes>
        <Route path="/" element={<KanjiPage/>} />
        <Route path="/HiraganaPage" element={<HiraganaPage/>} />
        <Route path="/KatakanaPage" element={<KatakanaPage/>} />
      </Routes>
    </div>

  );
}

export default App;
