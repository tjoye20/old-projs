import React from 'react';
//we used to import BrowserRouter, but switched to 
//just Router so we can pass in our own History with it
//instead of the default history that comes with the 
//BrowserRouter library. We would get a warnning otherwise.
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

//we have to import a new history to pass to
//Router instead of using the default set in
//BrowserRouter (which we no longer import)
import history from '../history';


export const App = () => {
  return(
    <div>
      <Router history={history}>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete' exact component={StreamDelete} />
          <Route path='/streams/show' exact component={StreamShow} />
        </div>
      </Router>
    </div>
  )
}

// the exact keyword means it matches the route path exactly.
//we use <Link> to add anchor tags for navigating in React apps. 