import { useContext } from "react";
import PlaylistContext from "../store/playlist-context";

import classes from "./MainPage.module.css";
import PlaylistGroup from "../components/ui/PlaylistGroup";
import { Row, Container, Col, Button } from "react-bootstrap";

function MainPage() {

  const playlistCtx = useContext(PlaylistContext);

  if (playlistCtx.playlists.length === 0) {
    return <div>Loading...</div>;
  }

  const playLists = playlistCtx.playlists;

  return (
    <div className="App">
      <Container>
        <Row className="mt-3">
          <Col sm={4}>
            <Button className={classes.button}>&lt;</Button>
            <Button className={classes.button}>&gt;</Button>
          </Col>
          <Col sm={4}>
          <input type="text" placeholder="Ara" className={classes.searchInput}/>
          </Col>
          <Col sm={4} className="d-flex align-items-center justify-content-center">
            <Button className={classes.profile}>
              <label style={{color: "#333333"}}>Profile</label>
            </Button>
          </Col>
        </Row>
      </Container>

      <h2 style={{color: "#FFFFFF"}}>Yakında Çalanlar</h2>
      <PlaylistGroup data={playLists[2]} />

      <h2 style={{color: "#FFFFFF"}}>Tavsiye Edilenler</h2>
      <p style={{color: "#FFFFFF"}}>Sevdiğin her şeyden biraz dinle.</p>
      <PlaylistGroup data={playLists[1]} />
    </div>
  );
}
export default MainPage;
