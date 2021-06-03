import todos from '../../apis/todos';

export const fetchTodos = () => {

}

export const fetchTodo = (todoId) => {

}

export const deleteTodo = (todoId) => {

}

export const editTodo = (todoId, payload) => {

}



/*
-fetch Todos
-fetch Todo
-delete Todo
-edit Todo

import news from '../apis/news';

export const fetchNews = (term = 'usa') => {
  return async (dispatch) => {
    const response = await news.get(
      '/everything', {
        params: {
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
          q: term
        } 
      }                             
    )

    dispatch({
      type: 'FETCH_NEWS',
      payload: response.data.articles
    });
  };
}

export const fetchTopNews = () => {
  return async (dispatch) => {
    const response = await news.get(
      '/top-headlines', {
        params: {
          apiKey: process.env.REACT_APP_NEWS_API_KEY,
          country: 'us'
        } 
      }                             
    )

    dispatch({
      type: 'FETCH_TOP_NEWS',
      payload: response.data.articles
    });
  };
}
*/







