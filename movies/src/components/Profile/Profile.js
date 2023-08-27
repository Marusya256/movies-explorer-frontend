import './Profile.css';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';

function Profile() {
  return (
    <div className="profile__cover">
      <Header />
      <div className="profile__content">
        <h2 className="profile__header">Привет, <span>Виталий!</span></h2>
        <div className="profile__info">
          <div className="profile__text-cover profile__text-cover_type_border">
            <p className="profile__text">Имя</p>
            <p className="profile__text">Виталий</p>
          </div>
          <div className="profile__text-cover">
            <p className="profile__text">E-mail</p>
            <p className="profile__text">pochta@yandex.ru</p>
          </div>
        </div>
        <Link to="/profile/edit" className="button button_type_profile-edit">Редактировать</Link>
        <Link to="/signin" className="button button_type_profile-logout">Выйти из аккаунта</Link>
      </div>
    </div>
  );
}

export default Profile;
