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
      {props.atMoviesPage ? 
      (<>
        <p className={props.isNotFound && !props.isLoading ? 'text-error': 'text-error-hidden'}>Ничего не найдено</p>
        <p className={props.isServerError && !props.isLoading ? 'text-error': 'text-error-hidden'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        <ul className="gallery__list">
          {props.moviesList.slice(0, showMoviesCard).map((card, i) => {
            return <MoviesCard card={card} handleDislike={props.handleDislike} savedMoviesList={props.savedMoviesList} findoutMoviesLike={props.findoutMoviesLike} handleDeleteMovie={props.handleDeleteMovie} isMoviesSaved={props.isMoviesSaved} imgUrl={props.imgUrl} atMoviesPage={props.atMoviesPage} handleSaveMovie={props.handleSaveMovie} />
          })}
        </ul>
        <button className={props.moviesList.length < 8 || showMoviesCard >= props.moviesList.length ? 'button button_type_hidden' : 'button button_type_open-more'} type="button" onClick={handleMoreButtonClick}>Ещё</button>  
      </>) : (<>
        <p className={props.isNotFound && !props.isLoading ? 'text-error': 'text-error-hidden'}>Ничего не найдено</p>
        <p className={props.isServerError && !props.isLoading ? 'text-error': 'text-error-hidden'}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
        <ul className="gallery__list">
          {props.moviesList.map((card, i) => {
            return <MoviesCard card={card} moviesList={props.moviesList} savedMoviesList={props.savedMoviesList} handleDeleteMovie={props.handleDeleteMovie} imgUrl={props.imgUrl} isMoviesSaved={props.isMoviesSaved} atPageSavedMovies={props.atPageSavedMovies} showButtonDelete={props.showButtonDelete} />
          })}
        </ul>
      </>)}  
    </section>
  );
}

export default MoviesCardList;
