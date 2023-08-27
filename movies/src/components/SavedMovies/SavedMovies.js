import './../App/App.css';
import './../Movies/Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';

function SavedMovies() {
  return (
    <div>
      <Header onPageSavedMovies={true}/>
      <SearchForm />
      <div className="gallery">
        <MoviesCardList test={false}/>
      </div>
    </div>
  );
}

export default SavedMovies;
