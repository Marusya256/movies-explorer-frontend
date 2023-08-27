import film from './../../images/1.png';
import './MoviesCard.css';

function MoviesCard(props) {
  return (
    <div className="gallery-item" onMouseOver={props.test ? props.handleIconCardSaved : props.handleIconCardDelete} onMouseOut={props.closeAllIcon}>
      <img className="gallery-item__poster" src={film} alt='film'/>
      <div className="gallery-item__parameter">
        <h2 className="gallery-item__title">33 слова о дизайне</h2>
        <p className="gallery-item__duration">1ч 17м</p>
      </div>
        <button type="button" className={`button` + (props.iconCardSaved ? ' button_type_save' : ' button_type_hidden')}>Сохранить</button>
        <button type="button" className={`button` + (props.iconCardDelete ? ' button_type_delete' : ' button_type_hidden')}></button>
        <button type="button" className={`button` + (props.iconCardInGallery ? ' button_type_ingallery' : ' button_type_hidden')}></button>
    </div>
  );
}

export default MoviesCard;
