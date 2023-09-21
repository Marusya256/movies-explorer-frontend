import './../Profile/Profile.css';
import React from 'react';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function ProfileForm(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [profileError, setProfileError] = React.useState(false);

  const [isChangedData, setIsChangedData] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  // React.useEffect(() => {
  //   setIsEditForm(isEditForm);
  //   setButtonDisable(buttonDisable);
  //   setInputDisable(inputDisable);
  // }, []);

  function handleChangeName(e) {
    setName(e.target.value);
    // handleSaveButtonClass();
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    // handleSaveButtonClass();
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.onUpdateUser({
      name: name,
      email: email,
    });
  }
  // let buttonClass = 'button button_type_hidden';
  // function handleSaveButtonClass() {
  //   if (props.isEditForm) {
  //     buttonClass = 'button tes_button';
  //     if (isChangedData) {
  //       buttonClass = 'button button_type_save-profile';
  //     }
  //   } else {
  //     buttonClass = 'button button_type_hidden';
  //   }
  // }

  return (
    <form className="profile-info" onSubmit={handleSubmit}>
      <fieldset className="profile-info__fieldset">
        <div className="profile-info__label-cover profile-info__label-cover_type_border">
          <label className="profile-text">Имя</label>
          <input className="profile-info__input" type="text" name="newname" id="newname" onChange={handleChangeName} disabled={props.inputDisable} placeholder={name || ''} minLength="2" maxLength="15" autoFocus/>
        </div>
        <div className="profile-info__label-cover">
          <label className="profile-text">E-mail</label>
          <input className="profile-info__input" type="email" name="newemail" id="newemail" onChange={handleChangeEmail} disabled={props.inputDisable} placeholder={email || ''} minLength="2" maxLength="30"/>
        </div>
      </fieldset>
      <span className={profileError ? 'profile-info__error' : 'profile-info__error-hidden' }>При обновлении профиля произошла ошибка.</span>
      <button type='submit' className={props.isEditForm ? 'button tes_button' : isChangedData && props.isEditForm ? 'button button_type_save-profile' : 'button button_type_hidden'} disabled={props.buttonDisable} >Сохранить</button>
    </form>
  );
}

export default ProfileForm;
