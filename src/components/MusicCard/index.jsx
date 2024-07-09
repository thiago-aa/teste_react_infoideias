import React from "react";
import PropTypes from "prop-types";
import * as C from "./styles";

function MusicCard({ music }) {
  return (
    <C.Container>
      <C.Content>
        <p>{music.trackName}</p>
      </C.Content>
      <audio data-testid="audio-component" src={music.previewUrl} controls>
        <track kind="captions" />O seu navegador não suporta o elemento{" "}
        <code>audio</code>.
      </audio>
    </C.Container>
  );
}

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string.isRequired,
    previewUrl: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
    artworkUrl60: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
  }).isRequired,
};

export default MusicCard;
