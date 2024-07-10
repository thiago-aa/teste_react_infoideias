import React, { useState } from "react";
import { Link } from "react-router-dom";

import searchAlbumsAPI from "../../services/searchAlbumsAPI";

import searchIcon from "../../assets/images/searchIcon.svg";

import * as C from "./styles";
import { Button } from "../../components/shared/Button";
import CardMusic from "../../components/CardMusic";
import Loader from "../../components/Loader";

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [artistFormName, setArtistFormName] = useState("");
  const [artistName, setArtistName] = useState("");
  const [artistAlbum, setArtistAlbum] = useState([]);
  const [hasAlbum, setHasAlbum] = useState(true);

  const handleChangeForm = ({ target }) => {
    const { name, value } = target;

    if (name === "artistFormName") {
      setArtistFormName(value);
    }
  };

  const onButtonClick = async (e) => {
    e.preventDefault();

    setLoading(true);
    setArtistFormName("");
    setArtistName(artistFormName);

    const album = await searchAlbumsAPI(artistFormName);
    const foundAlbum = album.length > 0;

    setLoading(false);
    setArtistAlbum(album);
    setHasAlbum(foundAlbum);
  };

  const buttonDisabled = () => {
    const MIN_LENGTH_NAME = 2;
    return artistFormName.length >= MIN_LENGTH_NAME;
  };

  return (
    <C.Container>
      <C.Content>
        <C.Form>
          <label htmlFor="search-artist-input">
            <input
              id="search-artist-input"
              type="text"
              name="artistFormName"
              value={artistFormName}
              placeholder="Nome do Artista"
              onChange={handleChangeForm}
            />
            <button
              type="button"
              disabled={!buttonDisabled()}
              onClick={onButtonClick}
            >
              <img src={searchIcon} alt="Search Icon" />
            </button>
          </label>
          <div>
            <Button
              type="submit"
              data-testid="search-artist-button"
              disabled={!buttonDisabled()}
              onClick={onButtonClick}
            >
              Pesquisar
            </Button>
          </div>
        </C.Form>

        {loading ? (
          <Loader />
        ) : (
          <div>
            {artistAlbum.length > 0 && (
              <>
                <h2>Resultado de álbuns de: {artistName}</h2>
                <C.CardList>
                  {artistAlbum.map((music) => {
                    // console.log(music);
                    return (
                        <Link
                          to={`/album/${music.collectionId}`}
                          key={music.collectionId}
                          data-testid={`link-to-album-${music.collectionId}`}
                        >
                          <CardMusic music={music} />
                        </Link>
                    )    
                  }
                  
                  )}
                </C.CardList>
              </>
            )}
            <div>{hasAlbum ? null : <p>Nenhum álbum foi encontrado</p>}</div>
          </div>
        )}
      </C.Content>
    </C.Container>
  );
};

export default Search;
