import logo from './../../images/logo.svg';
import './Header.css';
import NavTab from './../NavTab/NavTab';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <div>
      <header className="header">
        <Link to="/"><img className="logo" src={logo} alt="Logo"></img></Link>
        <ul className="header__login-list">
          <li><Link to="/signup" className="header__button_registration">Регистрация</Link></li>
          <li><Link to="/signin" className="header__button_login">Войти</Link></li>
        </ul>
      </header>
      <header className="header">
        <Link to="/"><img className="logo" src={logo} alt="Logo"></img></Link>
        <NavTab onPageMain={props.onPageMain} onPageMovies={props.onPageMovies} onPageSavedMovies={props.onPageSavedMovies}/>
      </header>
    </div>
  );
}

export default Header;
