import React, { useState } from 'react';
import './Accordion.css';
import { ACCORDION_LIST } from '../../utils/constants.js';

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
    <AccordionList
      accordionList={ACCORDION_LIST}
      isActive={isActive}
      onToggle={toggleAccordionItemHandler}
    />
  );
}

export default Accordion;
