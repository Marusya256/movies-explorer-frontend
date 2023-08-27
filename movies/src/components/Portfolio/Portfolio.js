import arrow from './../../images/arrow.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list-of-sites">
        <li className="portfolio__list-item">
          <p className="portfolio__list-title">Статичный сайт</p>
          <a className="portfolio__list-button" href='https://github.com/Marusya256/how-to-learn' target="_blank" rel="noreferrer"><img src={arrow} alt='Кнопка перехода на сайт'></img></a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__list-title">Адаптивный сайт</p>
          <a className="portfolio__list-button" href='https://github.com/Marusya256/russian-travel' target="_blank" rel="noreferrer"><img src={arrow} alt='Кнопка перехода на сайт'></img></a>
        </li>
        <li className="portfolio__list-item">
          <p className="portfolio__list-title">Одностраничное приложение</p>
          <a className="portfolio__list-button" href='https://github.com/Marusya256/react-mesto-api-full-gha' target="_blank" rel="noreferrer"><img src={arrow} alt='Кнопка перехода на сайт'></img></a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
