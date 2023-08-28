import './Login.css';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.svg';

function Login() {
  return (
    <section>
      <div className="login">
        <img className="logo logo_type_mobile" src={logo} alt='Logo'/>
        <form className="login__form">
          <h2 className="login__header">Рады видеть!</h2>
          <fieldset className="login__field">
            <div className="login__input-cover">
              <label className="login__label" for="useremail">E-mail</label>
              <input className="login__input login__input_type_login" type="email" name="useremail" id="useremail" required placeholder="mail@mail.ru" minLength="2" maxLength="40" />
              <span className="login__input-error useremail-error"></span>
            </div>
            <div className="login__input-cover">
              <label className="login__label" for="userpassword">Пароль</label>
              <input className="login__input login__input_type_login" type="password" name="userpassword" id="userpassword" required placeholder="Пароль" minLength="2" maxLength="15" />
              <span className="login__input-error userepassword-error">Что-то пошло не так...</span>
            </div>
            <button className="button button_type_sub button_type_login" type="submit">Войти</button>
          </fieldset>
          <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </section>
  );
}

export default Login;
