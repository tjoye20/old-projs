export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      //this is the new state
      return action.payload;
    default:
      //the old unchanged state
      //called when no action type matches
      return state;
  }
}




