import './MoviesCard.css';
import React from 'react';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function MoviesCard(props) {

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

  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    const saevedMovie = props.SavedMoviesList.find(i => i.movieId === props.card.id);
    
    if (saevedMovie) {
      props.card._id = saevedMovie._id;
      setIsLiked(true);
    }
  }, [props.SavedMoviesList, props.card]);

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
              className={`button ${isLiked ? ' button_type_ingallery' : ' button_type_save'}`}
              type="button"
              onClick={() => props.handleSaveMovie(props.card)}
              disabled={isLiked ? true : false}
            >{isLiked ? '' : 'Сохранить'}</button>
          }
      </li>
    </CurrentUserContext.Provider>
  );
}

export default MoviesCard;
