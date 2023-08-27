import film from './../../images/1.png';
import film2 from './../../images/2.png';
import film3 from './../../images/3.png';
import film4 from './../../images/4.png';
import film5 from './../../images/5.png';
import film6 from './../../images/6.png';
import './MoviesCardList.css';
import './../MoviesCard/MoviesCard.css';
// import MoviesCard from './../MoviesCard/MoviesCard';
import React from 'react';

function MoviesCardList(props) {
  const [iconCardSaved, setIconCardSaved] = React.useState(false);
  // const [iconCardInGallery, setIconCardInGallery] = React.useState(false);
  const [iconCardDelete, setIconCardDelete] = React.useState(false);

  function handleIconCardSaved() {
    setIconCardSaved(true);
  }

  // function handleIconCardInGallery() {
  //   setIconCardInGallery(true);
  // }

  function handleIconCardDelete() {
    setIconCardDelete(true);
  }

  function closeAllIcon() {
    setIconCardSaved(false);
    // setIconCardInGallery(false);
    setIconCardDelete(false);
  }

  return (
    <div className="gallery__list">
      {/* <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/>
      <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/>
      <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/>
      <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/>
      <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/>
      <MoviesCard test={props.test} handleIconCardSaved={handleIconCardSaved} handleIconCardInGallery={handleIconCardInGallery} handleIconCardDelete={handleIconCardDelete} closeAllIcon={closeAllIcon} iconCardSaved={iconCardSaved} iconCardInGallery={iconCardInGallery} iconCardDelete={iconCardDelete}/> */}

      <div className="gallery-item" onMouseOver={props.test ? handleIconCardSaved : handleIconCardDelete} onMouseOut={closeAllIcon}>
        <img className="gallery-item__poster" src={film} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">33 слова о дизайне</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className={`button` + (iconCardSaved ? ' button_type_save' : ' button_type_hidden')}>Сохранить</button>
        <button type="button" className={`button` + (iconCardDelete ? ' button_type_delete' : ' button_type_hidden')}></button>
      </div>
      <div className="gallery-item" handleIconCardInGallery>
        <img className="gallery-item__poster" src={film2} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Киноальманах «100 лет дизайна»</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_ingallery"></button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film3} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">В погоне за Бенкси</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_delete"></button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film4} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Баския: Взрыв реальности</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film5} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Бег это свобода</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      {/* <div className="gallery-item">
        <img className="gallery-item__poster" src={film6} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Книготорговцы</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">33 слова о дизайне</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film2} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Киноальманах «100 лет дизайна»</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film3} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">В погоне за Бенкси</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film4} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Баския: Взрыв реальности</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film5} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Бег это свобода</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div>
      <div className="gallery-item">
        <img className="gallery-item__poster" src={film6} alt='film'/>
        <div className="gallery-item__parameter">
          <h2 className="gallery-item__title">Книготорговцы</h2>
          <p className="gallery-item__duration">1ч 17м</p>
        </div>
        <button type="button" className="button button_type_save">Сохранить</button>
      </div> */}
    </div>
  );
}

export default MoviesCardList;
