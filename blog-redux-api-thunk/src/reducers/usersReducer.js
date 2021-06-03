export default (state = [], action) => {
  //this is an array b/c we're loading all the users for Posts
  //we have loaded
  switch (action.type) {
    case 'FETCH_POST_USER':
      //this is the new state
      return [...state, action.payload];
    default:
      //the old unchanged state
      //called when no action type matches
      return state;
  }
}