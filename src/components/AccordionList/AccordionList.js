import React from 'react';
import './AccordionList.css';
import AccordionItem from '../AccordionItem/AccordionItem';

function AccordionList({ isActive, onToggle, accordionList }) {
  return (
    <ul className='accordion__list'>
      {accordionList.map((accordionElement, index) => {
        return (
          <AccordionItem
            accordionObj={accordionElement}
            key={index}
            id={index}
            onToggle={() => onToggle(index)}
            isActive={isActive === index}
          />
        );
      })}
      {/* <li className='accordion__item'>
        <div
          className='accordion__title'
          onClick={() => setIsActive(!isActive)}
        >
          <h3
            className={`${
              isActive
                ? 'accordion__title-text accordion__title-text_bold'
                : 'accordion__title-text'
            }`}
          >
            How many team members can I invite?
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
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </p>
        </div>
      </li> */}
    </ul>
  );
}

export default AccordionList;
