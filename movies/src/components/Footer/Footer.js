import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__info">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__container">
        <p className="footer__copyrigth">© 2020</p>
        <ul className="footer__list-of-partners">
          <li className="footer__list-item">Яндекс.Практикум</li>
          <li className="footer__list-item">Github</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
