import './../App/App.css';
import './../Movies/Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from './../Footer/Footer.js';

function SavedMovies(props) {
  return (
    <section>
      <Header loggedIn={props.loggedIn} atPageSavedMovies={true}/>
      <SearchForm getMovies={props.getMovies} getSavedMovies={props.getSavedMovies} location={props.location} updateValueCheckbox={props.updateValueCheckbox} updateValueKeyword={props.updateValueKeyword} onCheckbox={props.onCheckbox} moviesKeywordInput={props.moviesKeywordInput}/>
      <section className="gallery">
        <MoviesCardList atPageSavedMovies={true} savedMoviesListSearch={props.savedMoviesListSearch} SavedMoviesList={props.SavedMoviesList} handleDeleteMovie={props.handleDeleteMovie} imgUrl={false} isMoviesSaved={true} showButtonDelete={true} isNotFound={props.isNotFound} isServerError={props.isServerError} isLoading={props.isLoading} moviesList={props.moviesList}/>
      </section>
      <Footer />
    </section>
  );
}

export default SavedMovies;
