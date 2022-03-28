import React, { useState } from 'react';
import './Accordion.css';
import arrowdown from '../../images/icon-arrow-down.svg';

function Accordion() {
  const [isActive, setIsActive] = useState(false);

  return (
    <ul className='accordion'>
      <li className='accordion__item'>
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
      </li>
    </ul>
  );
}

export default Accordion;
