import './../App/App.css';
import './PageNotFound.css';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {

  const navigate = useNavigate();

  function goToBack() {
    navigate(-1, { replace: true });
  }

  return (
    <section className="not-found">
      <h3 className="not-found__title">404</h3>
      <p className="not-found__text">Страница не найдена</p>
      <button className="button button_type_to-back" onClick={goToBack}>Назад</button>
    </section>
  );
}

export default PageNotFound;
