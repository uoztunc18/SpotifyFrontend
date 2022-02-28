import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import PlaylistPage from "./pages/PlaylistPage";
import FavoritesPage from "./pages/FavoritesPage";
import Layout from "./layout/Layout";
import TracksPage from "./pages/TracksPage";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/playlists" element={<PlaylistPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/tracks" element={<TracksPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
