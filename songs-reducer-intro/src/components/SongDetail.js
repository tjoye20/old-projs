import React from 'react';
import { connect } from 'react-redux';
//whenever we need to make changes to our state
//we use the #connect helper

const SongDetail = (props) => {
  if (!props.song) {
    return <div>Select a song</div>
  }

  return(
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {props.song.title}
        <br/>
        Duration: {props.song.duration}
      </p>
    </div>
  );
};

//used to call the #selectedSong method saved in the 
//Redux store of reducers, adding it to our props
const mapStateToProps = (state) => {
  return { song: state.selectedSong }
};

//grabs the #selectedSong object from the Redux store
//and stores it in our #song prop for SongDetail to use
export default connect(mapStateToProps)(SongDetail);