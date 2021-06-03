import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map((song) => {
      return(
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button 
              className='ui button primary'
              //the () below makes sure the method isn't called
              //until the onClick is pressed
              onClick={() => this.props.selectSong(song)}
            > 
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      );
    });
  }
  render() {
    //this renders the props object created by the code in #connect
    //selectSong is your Action#creator. If you call it, it calls the 
    //dispatch automatically 
    return <div className='ui divided list'>{this.renderList()}</div>;
  }
}

//the state passed in contains all of the 
//state in the Redux store. State refers to 
//all of the data inside of our redux store. 

//you are mapping the state/data in the Redux store, to 
//props that you can use
//when this fxn is passed to the #connect fxn, 
//the #connect always passes in the #state params
const mapStateToProps = (state) => {
  console.log(state)
  // returns state/data in your Redux store

  //this.props will now equal this object
  return { songs: state.songs}

}


//for each action you want to do iin this component
//you have to save the action in the props
//select song will be added to this.props which will render
// { selectSong: f(), songs: [{..}, {..}, {...}]}
//#connnect is basically used to call the functions/state you set
//in the reducers #combineReducers
export default connect(mapStateToProps, {
  //this is passing the action to the dispatch to be called
  //when we trigger the props for this
  selectSong: selectSong //you can do { selectSong } ES6 shortcut
  //this passes the #selectSong action to the props for you to call
})(SongList);

