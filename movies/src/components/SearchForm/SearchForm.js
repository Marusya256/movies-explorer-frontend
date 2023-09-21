import search from './../../images/search-icon.svg';
import './SearchForm.css';
import { useState, useEffect } from 'react';

function SearchForm(props) {

  const [errorInput, setErrorInput] = useState(false);

  function changeValueInputSearch (e) {
    props.updateValueKeyword(e.target.value);
  }

  function changeValueCheckbox (e) {
    props.updateValueCheckbox(e.target.value);
  }

  function getMovies(e) {
    e.preventDefault();

    if(e.target.closest('form').checkValidity()) {
      if (props.location.pathname === '/movies') {
        props.getMovies();
        setErrorInput(false);
      } else {
        props.getSavedMovies();
        setErrorInput(false);
      }
    } else {
      setErrorInput(true);
    }
  }

  //ин


  return (
    <section className="form-cover">
      <form className="search-form" onSubmit={getMovies} noValidate>
        <fieldset className="search-field">
          <div className="search-form__input-cover">
            <input className="search-form__input search-form__input_type_search" onChange={changeValueInputSearch}  type="search" name="searchfilm" id="searchfilm" required placeholder="Фильм" value={props.moviesKeywordInput} minLength="1" maxLength="40" />
            <span className={errorInput ? 'search-form__input-error' : 'input-error-hidden'}>Нужно ввести ключевое слово</span>
          </div>      
          <div className="search-form__input-cover">
            <label className="search-form__input-label"><input className="search-form__input search-form__input_type_checkbox-button" onChange={changeValueCheckbox} type="checkbox" checked={props.valueCheckbox} name="checkboxbtn" id="checkboxbtn"/><span className="checkbox-indicator"></span>Короткометражки</label>
          </div>
        </fieldset>
        <button className="button button_type_sub button_type_search" type="submit"><img src={search} alt='Кнопка поиска'/></button>
      </form>
    </section>
  );
}

export default SearchForm;
