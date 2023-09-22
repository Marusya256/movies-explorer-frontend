import './../App/App.css';
import './Movies.css';
import './../Preloader/Preloader.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from './../Footer/Footer.js';
import Preloader from './../Preloader/Preloader.js';
import React from 'react';

function Movies(props) {

  return (
    <section>
      <Header loggedIn={props.loggedIn} atMoviesPage={true} />
      <SearchForm getMovies={props.getMovies} moviesKeywordInput={props.moviesKeywordInput} location={props.location} valueCheckbox={props.valueCheckbox} updateValueCheckbox={props.updateValueCheckbox} updateValueKeyword={props.updateValueKeyword} onCheckbox={props.onCheckbox} searchKeywordMovies={props.searchKeywordMovies}/>
      <section className={(props.isLoading ? 'preloader-visible' : 'preloader-hidden')}>
        <Preloader />
      </section>
      <section className={(props.isLoading ? 'gallery-hidden' : 'gallery')}>
        <MoviesCardList isNotFound={props.isNotFound} imgUrl={true} savedMoviesList={props.savedMoviesList} isServerError={props.isServerError} atMoviesPage={true} isMoviesSaved={false} handleSaveMovie={props.handleSaveMovie} isLoading={props.isLoading} moviesList={props.moviesList} />
      </section>
      <Footer/>
    </section>
  );
}

export default Movies;