import React from 'react';
import './AccordionItem.css';
import arrowdown from '../../images/icon-arrow-down.svg';

function AccordionItem({ accordionObj, isActive, onToggle, id }) {
  //   const toggleAccordionHandler = () => {
  //     onToggle(id);
  //   };

  return (
    <li className='accordion__item'>
      <div className='accordion__title' onClick={onToggle}>
        <h3
          className={`${
            isActive
              ? 'accordion__title-text accordion__title-text_bold'
              : 'accordion__title-text'
          }`}
        >
          {accordionObj.title}
        </h3>
        <img
          src={arrowdown}
          alt='arrow'
          className={`${
            isActive
              ? 'accordion__item-icon accordion__item-icon_flipped'
              : 'accordion__item-icon'
          }`}
        />
      </div>
      <div className='accordion__content-container'>
        <p
          className={`${
            isActive
              ? 'accordion__content accordion__content_show'
              : 'accordion__content'
          }`}
        >
          {accordionObj.content}
        </p>
      </div>
    </li>
  );
}

export default AccordionItem;
