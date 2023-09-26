import React from 'react';
import imgDone from './../../images/done.png';
import './InfoTooltip.css';

function InfoTooltip(props) {

  return (
    <div className={`tooltip` + (props.isOpen ? ' tooltip_opened' : '')}>
      <div className="tooltip__container">        
        <img className="tooltip__img" src={imgDone} alt="Информационный символ"></img>
        <h3 className="tooltip__header">Данные успешно обновлены!</h3>
        <button type="button" className="button button_type_close close-edit" onClick={props.onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;

