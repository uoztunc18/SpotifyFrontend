import Playlist from "../Playlist";

import CardGroup from "react-bootstrap/CardGroup";

function PlaylistGroup(props) {
  const playLists = props.data;

  const playListItems = playLists.map((playlist) => {
    return <Playlist playlist={playlist} key={playlist.id} />;
  });

  return <CardGroup>{playListItems}</CardGroup>;
}

export default PlaylistGroup;
