import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


const options = [
  {
    label: 'Yoruba',
    value: 'yo'
  },
  {
    label: 'Zulu',
    value: 'zu',
  },
  {
    label: 'Xhosa',
    value: 'xh'
  }
];

const Translate = () => {
  const [language, selectedLanguage] = useState(options[0]);
  const [text, setText] = useState('');

  return(
    <div>
      <div className='ui form'>
        <div className='field'>
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>

      <Dropdown 
        label='Select a language'
        options={options} 
        selected={language}
        onSelectedChange={selectedLanguage}
      />
      <hr />
      <h3 className='ui header'>Output</h3>
      <Convert language={language} text={text}/>
    </div>
  );
}

export default Translate;