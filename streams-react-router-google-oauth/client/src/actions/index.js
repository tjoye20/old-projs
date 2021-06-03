import { 
  SIGN_IN, 
  SIGN_OUT, 
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM
} from './types';

import streams from '../apis/streams';
import history from '../history';

export const signIn = (currentUserId) => {
  //the action takes the currentUserId, and 
  //sends the payload to the Reducer to update the Redux store
  //this is an action we call when someone is signed in, we use
  //this action to store who's signed in

  //when you define an action, the payload is what you want to 
  //send to the Reducer to store in the Redux store, in whatever key
  //you define the Reducer to store it as.
  return {
    type: SIGN_IN,
    payload: currentUserId 
  };
};

//anytime our auth reducer sees an action of type SIGN_OUT, 
//it sets #isSignedIn to false
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

//you have access to the dispatch and Redux Store/State
export const createStream = (formValues) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response = await streams.post('/streams', { ...formValues, userId });
  
    dispatch({
      type: CREATE_STREAM,
      payload: response.data
    });
    //this is how we route our user to a new route
    history.push('/');
  };
}

export const fetchStreams = () => {
  return async (dispatch) => {
    const response = await streams.get('/streams');
  
    dispatch({
      type: FETCH_STREAMS,
      payload: response.data
    });
  };
}

export const fetchStream = (streamId) => {
  return async (dispatch) => {
    const response = await streams.get(`/streams/${streamId}`)

    dispatch({
      type: FETCH_STREAM,
      payload: response.data
    })
  }
}

export const deleteStream = (streamId) => {
  return async (dispatch) => {
    await streams.delete(`/streams/${streamId}`)
    //we don't need a reponse from the Delete operation
    dispatch({
      type: DELETE_STREAM,
      payload: streamId
    })
  }
}

export const editStream = (streamId, formValues) => {
  return async (dispatch) => {
    //a PUT request will update the WHOLE object, not just the changed values
    //that's why the userId was being overridden before, so we changed it to a PATCH
    //which only updates the properties that changed
    const response = await streams.patch(`/streams/${streamId}`, formValues)

    dispatch({
      type: EDIT_STREAM,
      payload: response.data
    })

    history.push('/');
  }
}

/*
alternate syntax:

export const createStream = (formValues) => async (dispatch) => {
  streams.post('/streams', formValues)
};


*/