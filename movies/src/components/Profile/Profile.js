import './Profile.css';
import Header from './../Header/Header.js';
import ProfileForm from './../ProfileForm/ProfileForm';
import React from 'react';
import { CurrentUserContext } from './../../context/CurrentUserContext';

function Profile(props) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState('');

  const [profileError, setProfileError] = React.useState(false);

  const [inputDisable, setInputDisable] = React.useState(true);
  const [buttonDisable, setButtonDisable] = React.useState(false);
  const [isEditForm, setIsEditForm] = React.useState(false);

  // function handleChangeName(e) {
  //   setName(e.target.value);
  // }

  // function handleChangeDescription(e) {
  //   setDescription(e.target.value);
  // }

  React.useEffect(() => {
    setName(currentUser.name);
  }, [currentUser]);

  // React.useEffect(() => {
  //   setIsEditForm(isEditForm);
  //   setButtonDisable(buttonDisable);
  //   setInputDisable(inputDisable);
  // }, []);

  function handleActiveFormEdit() {
    setIsEditForm(true);
    setButtonDisable(true);
    setInputDisable(false);
  }

  function handleUpdateUserInfo() {
    setIsEditForm(false);
    setInputDisable(true);
  }

  return (
    <section className="profile">
      <Header loggedIn={props.loggedIn}/>
      <div className="profile-content">
        <h2 className="profile-header">Привет, <span>{name || ''}</span>!</h2>
        <ProfileForm onUpdateUser={props.onUpdateUser} isEditForm={isEditForm} inputDisable={inputDisable} />
        <button type='button' className={isEditForm ? 'button_type_hidden' : 'button button_type_profile-edit'} disabled={buttonDisable} onClick={handleActiveFormEdit} >Редактировать</button>
        <button type='button' className={isEditForm ? 'button_type_hidden' : 'button button_type_profile-logout'} disabled={buttonDisable} onClick={props.signOut} >Выйти из аккаунта</button>
      </div>
    </section>
  );
}

export default Profile;
