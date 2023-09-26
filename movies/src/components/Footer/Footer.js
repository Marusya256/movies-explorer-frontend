import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyrigth">© 2020</p>
        <ul className="footer__list-of-partners">
          <li className="footer__list-item">
            <a className="footer__link" href='https://practicum.yandex.ru/' target="_blank" rel="noreferrer">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a className="footer__link" href='https://github.com/' target="_blank" rel="noreferrer">
              Github
            </a>  
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;