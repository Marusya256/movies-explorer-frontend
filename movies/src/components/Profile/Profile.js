import './Profile.css';
import Header from './../Header/Header.js';
import { Link } from 'react-router-dom';

function Profile(props) {
  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn}/>
      <div className="profile-content">
        <h2 className="profile-header">Привет, <span>Виталий!</span></h2>
        <div className="profile-info">
          <div className="profile-text-cover profile-text-cover_type_border">
            <p className="profile-text">Имя</p>
            <p className="profile-text">Виталий</p>
          </div>
          <div className="profile-text-cover">
            <p className="profile-text">E-mail</p>
            <p className="profile-text">pochta@yandex.ru</p>
          </div>
        </div>
        <Link to="/profile/edit" className="button button_type_profile-edit">Редактировать</Link>
        <Link to="/signin" className="button button_type_profile-logout">Выйти из аккаунта</Link>
      </div>
    </section>
  );
}

export default Profile;
