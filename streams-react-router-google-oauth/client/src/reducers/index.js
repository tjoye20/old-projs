import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamReducer from './streamReducer';

//when we pass our reducers to #combineReducers
//combineReducers automatically passes in the 
//action being invoked to all of them,
//so you can handle whatever action type you want 
//within each reducer

//these keys store the state we define in the 
//individual reducers
export default combineReducers({
  //#auth stores the states defined in authReducer
  auth: authReducer,
  form: formReducer, //has to be exactly like this for Redux form
  //streams is an object with multiple items stored in it {}, defined
  //in our streams Reducers

  //the Reducer defines the object you store the state information in

  //so our actions are just updating the same object
  //and we store that object in the streams key in our reducer
  streams: streamReducer
});