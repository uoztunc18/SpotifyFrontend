import { Card } from "react-bootstrap";

import classes from "./Playlist.module.css";

function Playlist(props) {
    const playlist = props.playlist;

    return <Card className={classes.card}>
        <img src={playlist.images[0].url} alt={playlist.name} />
        <h5 style={{color: "#FFFFFF"}}>{playlist.name}</h5>
        <p style={{color: "#FFFFFF"}}>{playlist.description}</p>
    </Card>
}

export default Playlist;