import './../App/App.css';
import './../Promo/Promo.css';

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__header">Учебный проект студента факультета Веб-разработки.</h1>
        <ul className="promo__list">
          <li className="promo__list-item"><a className="promo__link" href='#project'>О проекте</a></li>
          <li className="promo__list-item"><a className="promo__link" href='#techs'>Технологии</a></li>
          <li className="promo__list-item"><a className="promo__link" href='#aboutme'>Студент</a></li>
        </ul>
    </div>
  );
}

export default Promo;
