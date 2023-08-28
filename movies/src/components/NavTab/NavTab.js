import './NavTab.css';
import { Link } from 'react-router-dom';
import React from 'react';

function NavTab(props) {

  const [menuIsOpened, setMenuIsOpened] = React.useState(false);

  function handleMenuIsOpened() {
    setMenuIsOpened(true);
  }

  function closePopup() {
    setMenuIsOpened(false);
  }

  return (
    <section className="navigate">
      <button className="button button_type_menu" onClick={handleMenuIsOpened}></button>
      <div className="navigate__list-cover">
        <ul className='navigate__list'>
          <li><Link to="/movies" className={`navigate__list-item` + (props.onPageMovies ? ' item-active' : '')}>Фильмы</Link></li>
          <li><Link to="/saved-movies" className={`navigate__list-item` + (props.onPageSavedMovies ? ' item-active' : '')}>Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" className="button button_type_nav-account">Аккаунт</Link>
      </div>
      <div className={`menu` + (menuIsOpened ? ' menu_opened' : '')}>
        <div className="menu__cover">
          <button className="button button_type_menu-close" onClick={closePopup}></button>
          <ul className='menu__list'>
            <li className='menu__list-item'><Link to="/" className={`menu__list-item-link` + (props.onPageMain ? ' item-active' : '')}>Главная</Link></li>
            <li className='menu__list-item'><Link to="/movies" className={`menu__list-item-link` + (props.onPageMovies ? ' item-active' : '')}>Фильмы</Link></li>
            <li className='menu__list-item'><Link to="/saved-movies" className={`menu__list-item-link` + (props.onPageSavedMovies ? ' item-active' : '')}>Сохранённые фильмы</Link></li>
          </ul>
          <Link to="/profile" className="button button_type_menu-account">Аккаунт</Link>
        </div>
      </div>
    </section>
  );
}

export default NavTab;
