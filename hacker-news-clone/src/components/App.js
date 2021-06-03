import React from 'react';
import NewsList from './news/NewsList';
import TopNewsList from './news/TopNewsList';
import SearchBar from './news/SearchBar';

class App extends React.Component {
  render() {
    return (
      <div className='col-sm-12'>
        <SearchBar/>
        
        <div className='row'>
          <NewsList/>
          <TopNewsList/>
        </div>
      </div>
    )
  }
}

export default App;