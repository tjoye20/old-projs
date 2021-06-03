import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  return async function(dispatch, getState) {
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
      type: 'FETCH_POSTS',
      payload: response.data
    });
  };
};


/*
alternative ES6 syntax for the above

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response})
};

*/

// export const fetchUser = (userId) => {
//   return async function(dispatch) {
//     const response = await jsonPlaceholder.get(`/users/${userId}`)

//     dispatch({
//       type: 'FETCH_POST_USER',
//       payload: response.data
//     });
//   }
// }

//memoized version
//id => dispatch => means we have a function/id that calls
//another function/dispatch, that returns _fetchUser
// export const fetchUser = id => dispatch => {
//   _fetchUser(id, dispatch);
// }


export const fetchUser = (id, dispatch) => {
  return (dispatch) => {
     _fetchUser(id, dispatch); 
  }
}

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_POST_USER', payload: response.data })
})