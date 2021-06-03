import './SeasonDisplay.css';
import React from 'react';

const seasonConfig = {
  summer: {
    text: 'lets hit the beach',
    icon: 'sun'
  },
  winter: {
    text: 'Brr, it is chilly',
    icon: 'snowflake'
  }
};

const getSeason = (latitude, month) => {
  if(month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, icon } = seasonConfig[season];

  return(
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${icon} icon`}/>
      <h1>{text}</h1>   
      <i className={`icon-right massive ${icon} icon`}/> 
    </div>
  )
};

export default SeasonDisplay;