import Playlist from "./Playlist";

function PlaylistList(props) {
  const playLists = props.data;

  const playListItems = playLists.map((playlist) => {
    return <Playlist playlist={playlist} key={playlist.id} />;
  });

  return (
    <div>
      <h2 style={{ color: "green" }}>{props.name}</h2>
      {playListItems}
    </div>
  );
}

export default PlaylistList;
