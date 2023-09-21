import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../../images/logo.svg';
import React from 'react';
import moviesAuth from './../../utils/MoviesAuth'; 

function Login(props) {

  const [buttonSubmit, setButtonSubmit] = React.useState(false);

  const [validateInputEmail, setValidateInputEmail] = React.useState(true);
  const [validateInputPassword, setValidateInputPassword] = React.useState(true);

  const [formValue, setFormValue] = React.useState({
    useremail: '',
    userpassword: ''
  })

  const navigate = useNavigate();

  function handleActiveButtonSubmit() {
    if (!validateInputEmail && !validateInputPassword) {
      setButtonSubmit(true);
    } else {
      setButtonSubmit(false);
    }
  }

  React.useEffect(() => {
    handleActiveButtonSubmit();
  },)

  const handleChangeInputEmail = (e) => {
    const {name, value} = e.target;


    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputEmail(false)
    } else {
      setValidateInputEmail(true)
    }
  }

  const handleChangeInputPassword = (e) => {
    const {name, value} = e.target;


    setFormValue({
      ...formValue,
      [name]: value
    });

    if(e.target.validity.valid) {
      setValidateInputPassword(false)
    } else {
      setValidateInputPassword(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const { useremail, userpassword } = formValue;

    props.handleAythorizationUser(useremail, userpassword);
  }

  return (
    <section>
      <div className="login">
        <img className="logo logo_type_mobile" src={logo} alt='Logo'/>
        <form className="login__form" noValidates onSubmit={handleSubmit}>
          <h2 className="login__header">Рады видеть!</h2>
          <fieldset className="login__field">
            <div className="login__input-cover">
              <label className="login__label" htmlFor="useremail">E-mail</label>
              <input className="login__input login__input_type_login" type="email" onChange={handleChangeInputEmail} name="useremail" id="useremail" required placeholder="mail@mail.ru" minLength="2" maxLength="40" />
              <span className={validateInputEmail ? 'login__input-error' : 'input-error-hidden'}>Неверное значение для данного поля</span>
            </div>
            <div className="login__input-cover">
              <label className="login__label" htmlFor="userpassword">Пароль</label>
              <input className="login__input login__input_type_login" type="password" onChange={handleChangeInputPassword} name="userpassword" id="userpassword" required placeholder="Пароль" minLength="8" />
              <span className={validateInputPassword ? 'login__input-error' : 'input-error-hidden'}>Неверное значение для данного поля</span>
              <span className={props.errorInput ? 'register__input-error' : 'input-error-hidden'}>{ props.textErrorInput }</span>
            </div>
            <button className={buttonSubmit ? 'button button_type_sub button_type_register' : 'button button-hidden'} disabled={buttonSubmit ? false : true} type="submit">Войти</button>
          </fieldset>
          <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Login;
