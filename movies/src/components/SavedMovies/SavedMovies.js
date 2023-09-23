import './../App/App.css';
import './../Movies/Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from './../Footer/Footer.js';
import React from 'react';

function SavedMovies(props) {

  const [foundSavedMovies, setFoundSavedMovies] = React.useState(localStorage.getItem('saveMovies') ? JSON.parse(localStorage.getItem('saveMovies')) : []);
  
  const deleteMovies = (card) => {
    setFoundSavedMovies((foundSavedMovies) => foundSavedMovies.filter((i) => i._id !== card._id));
    props.handleDeleteMovie(card);
  }

  const [valueCheckbox, setValueCheckbox] = React.useState(false);

  const handlesubmitSearch = () => {
    if (props.savedMoviesKeywordInput) {
      setFoundSavedMovies(props.savedMoviesList.filter((i) => i.nameRU.toLowerCase().includes(props.savedMoviesKeywordInput.toLowerCase())));
    } else {
      setFoundSavedMovies(props.savedMoviesList)
    }
  }

  const updateValueCheckboxSavedMovies = () => {
    setValueCheckbox(!valueCheckbox);
    if (!valueCheckbox) {
      setFoundSavedMovies(props.savedMoviesList.filter((item) => item.duration <= 40));
    } else {
      setFoundSavedMovies(props.savedMoviesList);
    }
    localStorage.setItem('selectedCheckbox', !valueCheckbox);
  };

  return (
    <section>
      <Header loggedIn={props.loggedIn} atPageSavedMovies={true}/>
      <SearchForm getMovies={props.getMovies} handlesubmitSearch={handlesubmitSearch} updateValueCheckboxSavedMovies={updateValueCheckboxSavedMovies} savedMoviesList={props.savedMoviesList} handleFoundMovies={props.handleFoundMovies} location={props.location} updateValueCheckbox={props.updateValueCheckbox} updateValueKeyword={props.updateValueKeyword} onCheckbox={props.onCheckbox} moviesKeywordInput={props.moviesKeywordInput}/>
      <section className="gallery">
        <MoviesCardList atPageSavedMovies={true} savedMoviesList={props.savedMoviesList} handleDeleteMovie={deleteMovies} imgUrl={false} isMoviesSaved={true} isNotFound={props.isNotFound} isServerError={props.isServerError} isLoading={props.isLoading} moviesList={foundSavedMovies}/>
      </section>
      <Footer />
    </section>
  );
}

export default SavedMovies;
