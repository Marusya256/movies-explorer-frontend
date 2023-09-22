import './Profile.css';
import Header from './../Header/Header.js';
import React from 'react';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  // eslint-disable-next-line no-unused-vars
  const [profileError, setProfileError] = React.useState(false);

  const [inputDisable, setInputDisable] = React.useState(true);
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [isEditForm, setIsEditForm] = React.useState(false);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  function handleActiveFormEdit() {
    setIsEditForm(true);
    setButtonDisable(true);
    setInputDisable(false);
  }

  function handleUpdateUserInfo() {
    setIsEditForm(false);
    setInputDisable(true);
    setButtonDisable(false)
  }

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      email: email,
    });
    handleUpdateUserInfo();
  }

  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn}/>
      <div className="profile-content">
        <h2 className="profile-header">Привет, <span>{name || ''}</span>!</h2>
        <form className="profile-info" onSubmit={handleSubmit}>
          <fieldset className="profile-info__fieldset">
            <div className="profile-info__label-cover profile-info__label-cover_type_border">
              <label className="profile-text">Имя</label>
              <input className="profile-info__input" type="text" name="newname" id="newname" onChange={handleChangeName} disabled={inputDisable} value={name || ''} minLength="2" maxLength="15" autoFocus/>
            </div>
            <div className="profile-info__label-cover">
              <label className="profile-text">E-mail</label>
              <input className="profile-info__input" type="email" name="newemail" id="newemail" onChange={handleChangeEmail} disabled={inputDisable} value={email || ''} minLength="2" maxLength="30"/>
            </div>
          </fieldset>
          <span className={profileError ? 'profile-info__error' : 'profile-info__error-hidden' }>При обновлении профиля произошла ошибка.</span>
        </form>
        {!isEditForm
            ?
            <button
              className={`button button_type_profile-edit`}
              type="button"
              onClick={handleActiveFormEdit}
            >Редактировать</button>
            :
            <button
              className={`button ${(currentUser.name === name && currentUser.email === email) ? ' button_type_blocked' : ' button_type_save-profile'}`}
              type="button"
              onClick={handleSubmit}
              disabled={
                (currentUser.name === name &&
                currentUser.email === email)
              }
            >Сохранить</button>
          }
        <button type='button' className={isEditForm ? 'button_type_hidden' : 'button button_type_profile-logout'} disabled={buttonDisable} onClick={props.signOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
