import { combineReducers } from 'redux';

//the reducer is what we use to define what data we want to store
//and what key we want to store it in

//the reducers interact with the data in
//songsReducer. That's the datastore
//you'll have a coomponent that is looking over
//songsReducer, putting these objects into the wild for the other
//reducers to interact with.
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' }
  ];
}

//your reducers have methods that handle different types
//used to select one of the objects from songsReducer
const  selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

//This is our Redux store that contains
//all of our reducers/data, so we can use the 
// connect() to use these reducers later on
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})
//when we use connect(), it returns this
//object back to us