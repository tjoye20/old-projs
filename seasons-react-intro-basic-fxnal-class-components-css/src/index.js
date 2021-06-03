import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { latitude: null, errorMsg: '' };
  // }

  //refactor to this
  state = { latitude: null, errorMsg: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.updateLatitude(position.coords.latitude),
      error => {
        this.setState({ errorMsg: error.message })
      }                                               
    );
  }

  updateLatitude(latitude) {
    this.setState({
      latitude: latitude
    })
  }

  //try NOT to have multiple return statements inside of a 
  // render method, so you abstract it into this one method.
  renderContent() {
    if(this.state.errorMsg && !this.state.latitude) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if(!this.state.errorMsg && this.state.latitude) {
      return <SeasonDisplay latitude={this.state.latitude}/>;
    }

    return(<Spinner message='Please accept location request'/>);
  }

  render() {
    <div className='border red'> 
      {this.renderContent()}
    </div>
  };
}
ReactDOM.render(<App/>, document.getElementById('root'));