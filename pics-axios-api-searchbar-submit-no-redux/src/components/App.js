import React from 'react';
import SearchBar from './SearchBar';
import ImageList from './ImageList';
import unsplash from '../apis/unsplash';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { images: [] };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }


  async onSearchSubmit(term) {
    const response = await unsplash({
      params: {
        query: term
      }
    })
    
    this.setState({ images: response.data.results});
  }

  render(){
    return(
      <div className='ui container' style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    )
  }
};
export default App;