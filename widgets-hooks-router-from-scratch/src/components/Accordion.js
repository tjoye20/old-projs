import React, { useState } from 'react';
//useState gives you access to the State system inside of a 
//functional component

const Accordion = ({ items }) => {
  //array destructuring 
  //basically, alternative syntax: const things = useState(null)
  //const activeIndex = things[0]
  //const setActiveIndex = things[1]
  const [activeIndex, setActiveIndex] = useState(null);
  //the first argument is the piece of state you're trying to keep track of
  //second argument is function called to change the state.
  //the 'null' is the initial value of the state. The initial
  //value can be whatever you want, 'default string value', 0, etc. 

  //if you need multiple pieces of 'state', you need to call useState for each piece.


  //as soons as you call a setter function in the Hooks, the 
  //component re-renders again. 

  //When you re-render, the 
  const onTitleClick = (index) => {
    setActiveIndex(index);
  }

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>

        <div className={`title ${active}`}
          //arrow functions keep your event handler methods from being
          //called instantly.
          onClick={() => onTitleClick(index)}> 
          <i className='dropdown icon'></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>

      </React.Fragment>
    );
  });

  return(
    <div className='ui styled accordion'>
      {renderedItems}
    </div>
  );
}

export default Accordion;