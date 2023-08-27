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
    <div className="navigate__cover">
      <button className="button button_type_menu" onClick={handleMenuIsOpened}></button>
      <div className="navigate__list-cover">
        <ul className='navigate__list'>
          <li><Link to="/movies" className={`navigate__list-item` + (props.onPageMovies ? ' navigate__list-item_type_active' : '')}>Фильмы</Link></li>
          <li><Link to="/saved-movies" className={`navigate__list-item` + (props.onPageSavedMovies ? ' navigate__list-item_type_active' : '')}>Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" className='navigate__button_account'>Аккаунт</Link>
      </div>
      <div className={`menu` + (menuIsOpened ? ' menu_opened' : '')}>
        <div className="menu__cover">
          <button className="button button_type_menu-close" onClick={closePopup}></button>
          <ul className='menu__list'>
            <li className='menu__list-item'><Link to="/" className={`menu__list-item-link` + (props.onPageMain ? ' navigate__list-item_type_active' : '')}>Главная</Link></li>
            <li className='menu__list-item'><Link to="/movies" className={`menu__list-item-link` + (props.onPageMovies ? ' navigate__list-item_type_active' : '')}>Фильмы</Link></li>
            <li className='menu__list-item'><Link to="/saved-movies" className={`menu__list-item-link` + (props.onPageSavedMovies ? ' navigate__list-item_type_active' : '')}>Сохранённые фильмы</Link></li>
          </ul>
          <Link to="/profile" className='menu__button_account'>Аккаунт</Link>
        </div>
      </div>
    </div>
  );
}

export default NavTab;
