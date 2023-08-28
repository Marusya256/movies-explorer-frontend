import logo from './../../images/logo.svg';
import './Header.css';
import NavTab from './../NavTab/NavTab';
import { Link } from 'react-router-dom';

function Header(props) {
  return (
    <header>
      <section className={(props.loggedIn ? 'header-hidden ' : 'header')}>
        <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
        <ul className="header-login-list">
          <li><Link to="/signup" className="button button_type_to-registration">Регистрация</Link></li>
          <li><Link to="/signin" className="button button_type_to-login">Войти</Link></li>
        </ul>
      </section>
      <section className={(props.loggedIn ? 'header' : 'header-hidden')}>
        <Link to="/"><img className="logo" src={logo} alt="Logo"/></Link>
        <NavTab onPageMain={props.onPageMain} onPageMovies={props.onPageMovies} onPageSavedMovies={props.onPageSavedMovies}/>
      </section>
    </header>
  );
}

export default Header;
