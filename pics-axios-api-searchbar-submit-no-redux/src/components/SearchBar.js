import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  state = { term: '' }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div className='ui segment'>
        <form onSubmit={this.onFormSubmit} className='ui form'>
          <div className='field'>
            <label type='text' >Image search</label>
            <input 
              type='text' 
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;