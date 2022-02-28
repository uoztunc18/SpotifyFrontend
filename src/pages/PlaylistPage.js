import { useContext } from "react";
import PlaylistGroup from "../components/ui/PlaylistGroup";
import PlaylistContext from "../store/playlist-context";

function PlaylistPage() {
  const playlistCtx = useContext(PlaylistContext);

  if (playlistCtx.playlists.length === 0) {
    return <div>Loading...</div>;
  }

  const playLists = playlistCtx.playlists;

  return <div>
      <h2>Çalma Listeleri</h2>
      <PlaylistGroup data={playLists[0]}/>
  </div>
}

export default PlaylistPage;
