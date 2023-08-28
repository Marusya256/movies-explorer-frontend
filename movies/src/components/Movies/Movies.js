import './../App/App.css';
import './Movies.css';
import MoviesCardList from './../MoviesCardList/MoviesCardList.js';
import Header from './../Header/Header.js';
import SearchForm from './../SearchForm/SearchForm.js';
import Footer from './../Footer/Footer.js';

function Movies(props) {
  return (
    <section>
      <Header loggedIn={props.loggedIn} onPageMovies={true} />
      <SearchForm />
      <section className="gallery">
        <MoviesCardList test={true}  />
        <button className="button button_type_open-more">Ещё</button>
      </section>
      <Footer/>
    </section>
  );
}

export default Movies;
