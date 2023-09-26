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

  const [validateInputName, setValidateInputName] = React.useState(false);
  const [validateInputEmail, setValidateInputEmail] = React.useState(false);

  const [formValue, setFormValue] = React.useState({
    username: '',
    useremail: ''
  })

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

    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputName(false);
      if(e.target.value === '') {
        setValidateInputName(true);
      } else {
        setValidateInputName(false);
      }
    } else {
      setValidateInputName(true);
    }
  }

  const handleChangeInputEmail = (e) => {

    setEmail(e.target.value);

    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputEmail(false);
      if(e.target.value === '') {
        setValidateInputEmail(true);
      } else {
        setValidateInputEmail(false);
      }
    } else {
      setValidateInputEmail(true);
    }
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
              <input className="profile-info__input" type="email" name="newemail" id="newemail" onChange={handleChangeInputEmail} disabled={inputDisable} value={email || ''} minLength="2" maxLength="30" pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+){1,}\.([a-zA-Z]{2,})$"/>
              <span className={validateInputEmail ? 'profile__input-validate profile__input-email' : 'input-error-hidden'}>Неверное значение для поля Email</span>
              <span className={validateInputName ? 'profile__input-validate' : 'input-error-hidden'}>Неверное значение для поля Name</span>
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
              className={`button ${(validateInputName || validateInputEmail || (currentUser.name === name && currentUser.email === email)) ? ' button_type_blocked' : ' button_type_save-profile'}`}
              type="button"
              onClick={handleSubmit}
              disabled={validateInputName || validateInputEmail ||
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
