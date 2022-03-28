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
    </ul>
  );
}

export default AccordionList;
