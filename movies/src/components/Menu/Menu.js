import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="popup">
      <div className="smt__cover">
        <button className="button button_type_menu-close"></button>
        <ul className="smt__list">
          <li className="smt__list-item"><Link to="/" className="smt__list-item-link">Главная</Link></li>
          <li className="smt__list-item"><Link to="/movies" className="smt__list-item-link">Фильмы</Link></li>
          <li className="smt__list-item"><Link to="/saved-movies" className="smt__list-item-link">Сохранённые фильмы</Link></li>
        </ul>
        <Link to="/profile" className="smt__button_account">Аккаунт</Link>
      </div>
    </div>
  );
}

export default Menu;
