import arrow from './../../images/arrow.svg';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <ul className="portfolio__list-of-sites">
        <li className="portfolio__list-item">
          <a className="portfolio__list-link" href='https://github.com/Marusya256/how-to-learn' target="_blank" rel="noreferrer">
            <p className="portfolio__list-title">Статичный сайт</p>
            <img className="portfolio__list-button" src={arrow} alt='Кнопка перехода на сайт'/>
          </a>
        </li>
        <li className="portfolio__list-item">
        <a className="portfolio__list-link" href='https://github.com/Marusya256/russian-travel' target="_blank" rel="noreferrer">
            <p className="portfolio__list-title">Адаптивный сайт</p>
            <img className="portfolio__list-button" src={arrow} alt='Кнопка перехода на сайт'/>
          </a>
        </li>
        <li className="portfolio__list-item">
          <a className="portfolio__list-link" href='https://github.com/Marusya256/react-mesto-api-full-gha' target="_blank" rel="noreferrer">
            <p className="portfolio__list-title">Одностраничное приложение</p>
            <img className="portfolio__list-button" src={arrow} alt='Кнопка перехода на сайт'/>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
