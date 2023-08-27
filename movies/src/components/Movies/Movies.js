import './../App/App.css';
import './Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';

function Movies() {
  return (
    <div>
      <Header onPageMovies={true} />
      <SearchForm />
      <div className="gallery">
        <MoviesCardList test={true}  />
        <button className="button button_type_open-more">Ещё</button>
      </div>
    </div>
  );
}

export default Movies;
