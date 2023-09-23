import './MoviesCard.css';
import React from 'react';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function MoviesCard(props) {

  // eslint-disable-next-line no-unused-vars
  const [currentUser, setСurrentUser] = React.useState({});

  function convertDuration(n) {
    let h = Math.floor(n/60);
    let m = n - (60 * h);

    if (h === 0) {
      return m+'м';
    } else {
      return h+'ч '+m+'м';
    }
  }

  const handleLikeClick = (card) => {
    if (props.findoutMoviesLike(card)) {
      props.handleDislike(card);
    } else {
      props.handleSaveMovie(card)
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <li className="gallery-item">
        <a className="gallery-link-trailer" href={ props.card.trailerLink } target="_blank" rel="noreferrer">
          <img className="gallery-item__poster" src={props.imgUrl ? `https://api.nomoreparties.co/.${props.card.image.url}` : props.card.image} alt='постер к фильму'/>
        </a>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">{ props.card.nameRU }</h2>
          <p className="gallery-item__duration">{ convertDuration(props.card.duration) }</p>
        </div>
        {props.atPageSavedMovies
            ?
            <button
              className={`button button_type_delete`}
              type="button"
              onClick={() => props.handleDeleteMovie(props.card)}
            />
            :
            <button
              className={`button ${props.findoutMoviesLike(props.card) ? ' button_type_ingallery' : ' button_type_save'}`}
              type="button"
              onClick={() => handleLikeClick(props.card)}
            >{props.findoutMoviesLike(props.card) ? '' : 'Сохранить'}</button>
          }
      </li>
    </CurrentUserContext.Provider>
  );
}

export default MoviesCard;
