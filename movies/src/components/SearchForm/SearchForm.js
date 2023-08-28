import search from './../../images/search-icon.svg';
import './SearchForm.css';

function SearchForm() {
  return (
    <section className="form-cover">
      <form className="search-form">
        <fieldset className="search-field">
          <div className="search-form__input-cover">
            <input className="search-form__input search-form__input_type_search" type="search" name="searchfilm" id="searchfilm" required placeholder="Фильм" minLength="2" maxLength="40" />
            <span className="search-form__input-error username-error"></span>
          </div>      
          <div className="search-form__input-cover">
            <label className="search-form__input-label"><input className="search-form__input search-form__input_type_checkbox-button" type="checkbox" name="checkboxbtn" id="checkboxbtn"/><span className="checkbox-indicator"></span>Короткометражки</label>
          </div>
        </fieldset>
        <button className="button button_type_sub button_type_search" type="submit"><img src={search} alt='Кнопка поиска'/></button>
      </form>
    </section>
  );
}

export default SearchForm;
