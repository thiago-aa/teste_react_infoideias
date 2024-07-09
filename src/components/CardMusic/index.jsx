import PropTypes from "prop-types";
import React from "react";

import * as C from "./styles";

const CardMusic = ({ music }) => {
  return (
    <C.Container>
      <C.Image src={music.artworkUrl100} alt="" />
      <p className="title">{music.collectionName}</p>
      <p className="subtitle">{music.artistName}</p>
    </C.Container>
  );
};

CardMusic.propTypes = {
  music: PropTypes.shape({
    artworkUrl100: PropTypes.string,
    collectionName: PropTypes.string,
    artistName: PropTypes.string,
  }).isRequired,
};

export default CardMusic;
