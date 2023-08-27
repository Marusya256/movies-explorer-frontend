import './Register.css';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.svg';

function Register() {
  return (
    <div className="page-register">
      <img className="logo logo_type_mobile" src={logo} alt='Logo'></img>
      <div className="page-register__content">
        <form className="form__register">
          <h2 className="register__header">Добро пожаловать!</h2>
          <fieldset className="register__field">
            <div className="register__input-cover">
              <label className="register__label" for="username">Имя</label>
              <input className="register__input register__input_type_register" type="text" name="username" id="username" required placeholder="Виталий" minLength="2" maxLength="15" />
              <span className="register__input-error username-error"></span>
            </div>
            <div className="register__input-cover">
              <label className="register__label" for="useremail">E-mail</label>
              <input className="register__input register__input_type_register" type="email" name="useremail" id="useremail" required placeholder="mail@mail.ru" minLength="2" maxLength="40" />
              <span className="register__input-error useremail-error"></span>
            </div>
            <div className="register__input-cover">
              <label className="register__label" for="userpassword">Пароль</label>
              <input className="register__input register__input_type_register" type="password" name="userpassword" id="userpassword" required placeholder="Пароль" minLength="2" maxLength="15" />
              <span className="register__input-error userepassword-error">Что-то пошло не так...</span>
            </div>
            <button className=" button_type_sub button_type_register" type="submit">Зарегистрироваться</button>
            <p className="register__text">Уже зарегистрированы? <Link to="/signin" className="register__link">Войти</Link></p>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default Register;
