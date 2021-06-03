import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';


export default combineReducers({
  posts: postsReducer,
  users: usersReducer
})








// export default combineReducers({
//   test: () => 'hey' //we add this placeholder reducer so it removes the errors
//                     //until we have a valid reducer
// });



//you create an Action that makes a request and stores 
//response in a payload. 

//that action creator uses the dispatch to send that information
//to the redux store/reducer


//the redux store takes