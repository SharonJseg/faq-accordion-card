import React, { useState } from 'react';
import './Accordion.css';
import { ACCORDION_LIST } from '../../utils/constants.js';
import mainImage from '../../images/illustration-woman-online-desktop.svg';
import pattern from '../../images/bg-pattern-desktop.svg';

import AccordionList from '../AccordionList/AccordionList';

function Accordion() {
  const [isActive, setIsActive] = useState('0');

  const toggleAccordionItemHandler = (id) => {
    console.log(id);
    if (isActive === id) {
      return setIsActive('0');
    }
    setIsActive(id);
  };

  return (
    <section className='accordion'>
      <div className='accordion__wrapper'>
        <h2 className='accordion__header'>FAQ</h2>
        <AccordionList
          accordionList={ACCORDION_LIST}
          isActive={isActive}
          onToggle={toggleAccordionItemHandler}
        />
      </div>
      <img
        src={mainImage}
        alt='placeholder pic'
        className='accordion__main-image'
      />
      <img src={pattern} alt='pattern' className='accordion__main-pattern' />
    </section>
  );
}

export default Accordion;
