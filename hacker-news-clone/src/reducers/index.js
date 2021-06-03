import { combineReducers } from 'redux';
import newsReducer from './newsReducer';
import topNewsReducer from './topNewsReducer';

export default combineReducers({
  news: newsReducer,
  topNews: topNewsReducer
});