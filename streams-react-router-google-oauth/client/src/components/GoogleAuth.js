import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut} from '../actions'

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '680583642434-1f050jg4bch8kf35j1962c5dnhn6i7j1.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        //the #onAuthChange is used to listen to changes in 
        //sign in / sign out. 

        //this.auth.isSignedIn.get() gets you the user
        //that's asigned in
        this.onAuthChange(this.auth.isSignedIn.get());
        //#listen is a GAPI method that's invoked anytime
        //the user's authentication status changes, we can
        //pass a callback to it to handle that change, it passes
        //in true/false for isSignedIn
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  //set it to Arrow fxn so it's content is bound
  //to the component, since we're calling it
  //on an event listener.

  //isSignedIn/a boolean value representing sign in status
  //is sent when we #listen, so anytime a user signs in or out,
  //we call this method, which uses the action creators to 
  //pass the information to our redux store
  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      //this is calling our Actions and passing it the id
      //of the person that just signed in.
      //basically, when the User signs in, we use this action
      //to update our state
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      //when user signs out, we use this action to update our state
      this.props.signOut();
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return(
             //this.auth.signOut uses the GAPI to sign out
             //the user

             //we leave out the () so the method isn't invoked
             //immediately, but only when we call it
        <button onClick={this.auth.signOut} className='ui red google button'>
          <i className='google icon'/>
          Sign out
        </button>
      )
    } else {
      return(
        <button onClick={this.auth.signIn} className='ui red google button'>
          <i className='google icon'/>
          Sign in
        </button>
      )
    }
  }

  render() {
    return(
      <div>{this.renderAuthButton()}</div>
    )
  }
}

const mapStateToProps = (state) => {
  //this value is what our two action creators are
  //manipulating, so we grab it from the Redux store
  return { isSignedIn: state.auth.isSignedIn };
}

export default connect(
  mapStateToProps,
  //we pass in our actions/action creators as props for us to reference
  //in this component in our props
  { signIn, signOut } //we are now calling this in our props
)(GoogleAuth);