import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import MusicCard from "../../components/MusicCard";
import getMusics from "../../services/musicsAPI";

import * as C from "./styles";
import Loader from "../../components/Loader";

const Album = ({ match }) => {
  const [musicList, setMusicList] = useState([]);
  const [album, setAlbum] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMusics = async () => {
      const {
        params: { id },
      } = match;

      const request = await getMusics(id);
      const album = request[0];
      const musicList = request.filter((item) => item.kind === "song");

      setMusics(musicList, album);
    };

    fetchMusics();
  }, [match]);

  const setMusics = (musicList, album) => {
    setMusicList(musicList);
    setAlbum(album);
    setLoading(false);
  };

  return (
    <C.Container>
      {loading ? (
        <Loader />
      ) : (
        <C.Content>
          <C.ArtistContent>
            <img src={album.artworkUrl100} alt="" />
            <h1>{album.collectionName}</h1>
            <h2>{album.artistName}</h2>
          </C.ArtistContent>

          <C.MusicListContent>
            {musicList.map((music) => (
              <MusicCard
                key={music.trackId}
                music={music}
                isFavoritePage={false}
              />
            ))}
          </C.MusicListContent>
        </C.Content>
      )}
    </C.Container>
  );
};

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Album;
