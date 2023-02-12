import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='accordion'>
      <h3 className='accordion__btn-title'>
        <button className='accordion__btn' onClick={() => setIsOpen(!isOpen)}>{title}</button>
      </h3>
      {
        isOpen && <div className='accordion__inner'>{children}</div>
      }
    </div>
  );
};

export default Accordion;