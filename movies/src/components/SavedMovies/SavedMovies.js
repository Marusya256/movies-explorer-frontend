import './../App/App.css';
import './../Movies/Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from './../Footer/Footer.js';

function SavedMovies(props) {
  return (
    <section>
      <Header loggedIn={props.loggedIn} onPageSavedMovies={true}/>
      <SearchForm />
      <section className="gallery">
        <MoviesCardList test={false}/>
      </section>
      <Footer />
    </section>
  );
}

export default SavedMovies;
