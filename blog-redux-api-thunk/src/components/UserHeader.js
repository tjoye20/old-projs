import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'
//we import this, to pass it to Redux and assign it to a 
//prop that we can use.

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  renderUser() {
    const user = this.props.user;
    //alternative: const { user } = this.props

    if (!user) {
      return null;
    }
    
    return(
      <div className='header'>
        {user.name}
      </div>
    )
  };

  render() {
    return <div className='ui relaxed divided list'>{this.renderUser()}</div>;
  }
};

//mapStateToProps gets called with #ownProps, the props that are
//being passed to this component, so we can use it to do
//precalculations
const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  
  return {
    user: user
    //value stored in our reducer
  };
}

export default connect(mapStateToProps, { 
  //we save that api call into a prop so we 
  //can call it in our componentDidMount
  fetchUser: fetchUser 
} )(UserHeader);