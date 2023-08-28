import photoStudent from './../../images/photo.jpg';
import './../App/App.css';
import './../AboutMe/AboutMe.css';

function AboutMe() {
  return (
    <section className="student" id="aboutme">
      <h2 className="student__header">Студент</h2>
      <div className="about-student">
        <div className="about-student__text-cover">
          <p className="about-student__text-title">Марина</p>
          <p className="about-student__text-sybtitle">Фронтенд-разработчик, 26 лет</p>
          <p className="about-student__text-info">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
          <a className="about-student__link-gh" href="https://github.com/Marusya256" target="_blank" rel="noreferrer">Github</a>
        </div>
        <img className="about-student__photo" src={photoStudent} alt="Фото Студента"/>
      </div>
    </section>
  );
}

export default AboutMe;
