import './EditProfile.css';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';

function EditProfile() {
  return (
    <section className="profile-edit__cover">
      <Header />
      <div className="profile-edit__content">
        <h2 className="profile-edit__header">Привет, <span>Виталий!</span></h2>
        <form className="profile-edit__info">
          <fieldset className="profile-edit__fieldset">
            <div className="profile-edit__label-cover profile-edit__label-cover_type_border">
              <label className="profile-text">Имя</label>
              <input  className="profile-edit__input" type="text" name="newname" id="newname" required placeholder="Виталий" minLength="2" maxLength="15" autofocus/>
            </div>
            <div className="profile-edit__label-cover">
              <label className="profile-text">E-mail</label>
              <input className="profile-edit__input" type="email" name="newemail" id="newemail" required placeholder="pochta@yandex.ru" minLength="2" maxLength="30"/>
            </div>
          </fieldset>
          <span className="profile-edit__error">При обновлении профиля произошла ошибка.</span>
        </form>
        <Link to="/profile" className="button button_type_save-profile">Сохранить</Link>
      </div>
    </section>
  );
}

export default EditProfile;
