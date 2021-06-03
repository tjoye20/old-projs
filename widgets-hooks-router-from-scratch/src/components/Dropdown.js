import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      //checks to see if elements clicked on is inside of the component
      //we're referencing. useRef is used to reference an element in the DOM.

      //we want to see if the element that was clicked was inside the dropdown
      //or outside the dropdown
      if (ref.current.contains(event.target)) {
        return;
      }

      //when they click on the body, we want the dropdown 
      //to close, so we setOpen to false, which is used in the CSS class
      setOpen(false)
    };

    document.body.addEventListener('click', onBodyClick);
    //this is our cleanUp function that is called when the element
    //is about to be removed from the DOM and on every re-render
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
  }, []);

  const renderedOptions = options.map((option) => {
    if(option.value === selected.value) {
      //null means don't render anything
      return null;
    }

    return(
      <div 
        key={option.value} 
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    )
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div 
          onClick={() => setOpen(!open)} 
          className={`ui selection dropdown ${open ? 'visible active': ''}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? 'visible transition': ''}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
//the reason you can't click outside the dropdown to close it is that
//event handlers cannot listen to any event outside of what's created by the dropdown/element
//it's listening to.

//basically, the dropdown can't set up event handlers on elements it did
//not create.

//event bubbling occurs when you trigger an event, it goes to the element before it and
//checks to see if it has an event, if it does, it evokes it, then it goes to the next element up and repeats
//that same thing.

//that's why the dropdown closes when you click on an item.

//the problem with React and event bubbling is that event handlers that
//were added using addEventListener are called first, before any React element event handlers
//are called. Messing up the order you'd expect event bubbling to occur.