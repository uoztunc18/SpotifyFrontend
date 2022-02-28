import { createContext, useEffect, useState } from "react";

const PlaylistContext = createContext({
  playlists: [],
});

export function PlaylistContextProvider(props) {
  const [playlists, setPlayLists] = useState([]);

  useEffect(() => {
    fetch("http://zmdp.cloud/iseAlim/spotify.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const objects = [];
        for (const key in data) {
          const object = data[key];
          objects.push(object);
        }
        setPlayLists(objects);
      });
  }, []);

  const context = {
    playlists: playlists,
  };

  return (
    <PlaylistContext.Provider value={context}>
      {props.children}
    </PlaylistContext.Provider>
  );
}

export default PlaylistContext;