//Action creator
//when songsReducer is called by something else
//this action will be able to interact with those
//song objects
//the action retrieves the object you want to act on
//based on the type
export const selectSong = (song) => {
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}