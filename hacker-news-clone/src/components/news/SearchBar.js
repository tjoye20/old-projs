import React from 'react';
import { connect } from 'react-redux'
import { fetchNews } from '../../actions';
import { Field, reduxForm } from 'redux-form';


class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = (e) => {
    // e.preventDefault();
    console.log(this.state.term)
    this.props.fetchNews(this.state.term)
    // this.setState({ term: '' })
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="form-inline my-2 my-lg-0">
            <input 
              className="form-control mr-sm-2" 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })}
              type="search" 
              placeholder="Search" 
              aria-label="Search" 
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
    )
  }
}

//this now makes fetchNews a prop
// export default connect(
//   null, {
//     fetchNews
//   }
// )(SearchBar);

export default reduxForm({
  //since the key/value are the same
  //you can just write #validate once
  form: 'SearchBar'
})(SearchBar);