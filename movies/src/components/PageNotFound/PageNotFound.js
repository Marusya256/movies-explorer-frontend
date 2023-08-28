import './../App/App.css';
import './PageNotFound.css';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <section className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__text">Страница не найдена</p>
      <Link className="button button_type_to-back" to="/">Назад</Link>
    </section>
  );
}

export default PageNotFound;
