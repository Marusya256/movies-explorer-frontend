import './../Movies/Movies.css';
import './MoviesCardList.css';
import './../MoviesCard/MoviesCard.css';
import MoviesCard from './../MoviesCard/MoviesCard';
import React from 'react';
import { useState, useEffect } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";

function MoviesCardList(props) {

  const windowWidth = useWindowSize();

  const [showMoviesCard, setShowMoviesCard] = useState({});
  const [moreCards, setMoreCards] = useState({});

  useEffect(() => {
    if (windowWidth.width >= 1279) {
      setShowMoviesCard(12);
      setMoreCards(3);
    }
    if (windowWidth.width < 1279 && windowWidth.width >= 767) {
      setShowMoviesCard(8);
      setMoreCards(2);
    }
    if (windowWidth.width <= 767 && windowWidth.width >= 292) {
      setShowMoviesCard(5);
      setMoreCards(2);
    }
  }, [windowWidth]);

  function handleMoreButtonClick() {
    setShowMoviesCard(showMoviesCard + moreCards);
  }

  return (
    <section>
      <p className={props.isNotFound && !props.isLoading ? 'text-error': 'text-error-hidden'}>Ничего не найдено</p>
      <p className={props.isServerError && !props.isLoading ? 'text-error': 'text-error-hidden'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      {props.atMoviesPage ? 
      (<>
        <ul className="gallery__list">
          {props.moviesList.slice(0, showMoviesCard).map((card, i) => {
            return <MoviesCard card={card} SavedMoviesList={props.SavedMoviesList} isMoviesSaved={props.isMoviesSaved} imgUrl={props.imgUrl} showButtonSave={props.showButtonSave} atMoviesPage={props.atMoviesPage} handleSaveMovie={props.handleSaveMovie} />
          })}
        </ul>
        <button className={props.moviesList.length < 8 || showMoviesCard >= props.moviesList.length ? 'button button_type_hidden' : 'button button_type_open-more'} type="button" onClick={handleMoreButtonClick}>Ещё</button>  
      </>) : (<>
        <ul className="gallery__list">
          {props.moviesList.map((card, i) => {
            return <MoviesCard card={card} moviesList={props.moviesList} savedMoviesListSearch={props.savedMoviesListSearch} SavedMoviesList={props.SavedMoviesList} handleDeleteMovie={props.handleDeleteMovie} imgUrl={props.imgUrl} isMoviesSaved={props.isMoviesSaved} atPageSavedMovies={props.atPageSavedMovies} showButtonDelete={props.showButtonDelete} />
          })}
        </ul>
      </>)}  
    </section>
  );
}

export default MoviesCardList;
