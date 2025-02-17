import Header from "./src/Components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home.jsx";
import Artists from "./src/pages/Artists.jsx";
import Artist from "./src/pages/Artist.jsx";
import Songs from "./src/pages/Songs.jsx";
import Song from "./src/pages/Song.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artist/:id" element={<Artist />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/song/:id" element={<Song />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
