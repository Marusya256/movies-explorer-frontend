import './../App/App.css';
import './../Promo/Promo.css';

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="promo__list">
          <li className="promo__list-item">
            <a className="promo__link" href='#project'>
              <p className="promo__link-text">
                О проекте
              </p>
            </a>
          </li>
          <li className="promo__list-item">
            <a className="promo__link" href='#techs'>
              <p className="promo__link-text">
                Технологии
              </p>
            </a>
          </li>
          <li className="promo__list-item">
            <a className="promo__link" href='#aboutme'>
              <p className="promo__link-text">
                Студент
              </p>
            </a>
          </li>
        </ul>
    </section>
  );
}

export default Promo;
