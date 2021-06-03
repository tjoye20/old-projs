//to reduce the chance of you having spelling errors when specifying
//your action types in your actions and reducers,
//we create these constants of our possible types and inport them into
//our actions and reducers
//this works because misspelling the variable will throw an error, 
//helping you catch your error sooner.

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const CREATE_STREAM = 'CREATE_STREAM';
export const FETCH_STREAMS = 'FETCH_STREAMS';
export const FETCH_STREAM = 'FETCH_STREAM';
export const DELETE_STREAM = 'DELETE_STREAM';
export const EDIT_STREAM = 'EDIT_STREAM';