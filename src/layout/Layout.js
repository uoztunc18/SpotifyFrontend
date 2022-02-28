import BottomPlayer from "./BottomPlayer";
import Sidebar from "./Sidebar";
import classes from "./Layout.module.css";
import { PlaylistContextProvider } from "../store/playlist-context";

function Layout(props) {
  return (
    <div>
      <PlaylistContextProvider>
        <Sidebar />
        <main className={classes.mainContent}>{props.children}</main>
      </PlaylistContextProvider>
      <BottomPlayer />
    </div>
  );
}

export default Layout;
