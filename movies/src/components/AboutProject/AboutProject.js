import './../App/App.css';
import './../AboutProject/AboutProject.css';

function AboutProject() {
  return (
    <div className="about-project" id="project">
      <h2 className="about-project__header">О проекте</h2>
      <div className="about-project__info">
        <div className="about-project__info_container">
          <p className="about-project__info_header">Дипломный проект включал 5 этапов</p>
          <p className="about-project__info_text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__info_container">
          <p className="about-project__info_header">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__info_text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="about-project__advance">
      <div className="trek__container">
          <p className="trek__one-week">1 неделя</p>
          <p className="trek__text">Back-end</p>
        </div>
        <div className="trek__container">
          <p className="trek__four-week">4 недели</p>
          <p className="trek__text">Front-end</p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
