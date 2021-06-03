import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM
} from '../actions/types'

//our Stream Actions are manipulating the same information
//that we store in an object, so all of our stream actions are
//acting upon that same object of objects

//reducers have two arguments passed into them,
//state and action

//the state here is an object (of streams)
//this object will be saved to our combineReducers

//state will always be an object, very important.
//in your combineReducers, you're always saving this state object
//in a key called streams.
export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case FETCH_STREAMS:
      //mapkeys turns an array of objects into an object
      return { ...state, ..._.mapKeys(action.payload, 'id') }
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload }
    case DELETE_STREAM:
      delete state[action.payload] //our payload is just an id for delete
      return state;
      // return _.omit(state, action.payload);
    default: 
      return state;
  }
}