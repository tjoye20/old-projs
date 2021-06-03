import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Route from './components/Route';
import Header from './components/Header';

const items = [
  {
    title: 'What is React?',
    content:'React is a front end javascript framework.'
  },
  {
    title: 'Why Use React?',
    content: 'Because ppl like it.'
  }
]

const options = [
  {
    label: 'The Color Red',
    value: 'red'
  },
  {
    label: 'The Color Blue',
    value: 'blue'
  },
  {
    label: 'The Color Green',
    value: 'green'
  },
  {
    label: 'The Color Yellow',
    value: 'yellow'
  }
];

//Navigation/router from scratch

const showAccordion = () => {
  if(window.location.pathname === '/') {
    return <Accordion items={items}/>;
  }
}

const showList = () => {
  if(window.location.pathname === '/list') {
    return <Search/>;
  }
}

const showDropdown = () => {
  if(window.location.pathname === '/dropdown') {
    return <Dropdown />;
  }
}

const showTranslate = () => {
  if(window.location.pathname === '/translate') {
    return <Translate/>;
  }
}

//components inside of another component are
//referred to as Children

export default () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return(
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items}/>
      </Route>
      <Route path="/list">
        <Search/>
      </Route>
      <Route path="/dropdown">
        <Dropdown 
          label="Select a color"
          options={options}
          onSelectedChange={setSelected}
          selected={selected}
        />
      </Route>
      <Route path="/translate">
        <Translate items={items}/>
      </Route>
    </div>
  )
}

//Navigation/router from scratch


// the Dropdown work
// export default () => {
//   const [selected, setSelected] = useState(options[0]);
//   const [showDropdown, setShowDropdown] = useState(true);

//   return ( 
//     <div>
//       <button onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
//       {showDropdown ? 
//         <Dropdown
//           label='Select a color'
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//         /> : null
//       }
//     </div>
//   )
// }