import { ListGroup } from "react-bootstrap";
import { useContext } from "react";
import PlaylistContext from "../store/playlist-context";

import { Link } from "react-router-dom";

import classes from "./Sidebar.module.css";

function Sidebar() {
  const playlistCxt = useContext(PlaylistContext);

  let playlists = playlistCxt.playlists[0];

  if (playlistCxt.playlists.length === 0) {
    return <div>Loading...</div>;
  }

  const playListItems = playlists.map((playlist) => {
      console.log(playlist.name);
    return (
      <Link key={playlist.id} to="/tracks" className={classes.playlist}>
        {playlist.name}
      </Link>
    );
  });

  return (
    <aside className={classes.sidebar}>
      {/* <img name="logo" /> */}
      <ListGroup>
        <Link to="/" className={classes.entry}>Giriş</Link>
        <Link to="/" className={classes.look}>Gözat</Link>
        <Link to="/playlists" className={classes.library}>Kitaplık</Link>
      </ListGroup>
      <div>
          <label className={classes.text}>ÇALMA LİSTELERİN</label>
          <input type="text" placeholder="Ara" className={classes.searchInput}/>
      </div>
      <ListGroup className={classes.list}>{playListItems}</ListGroup>
    </aside>
  );
}

export default Sidebar;
