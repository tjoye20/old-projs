import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
//we import this, to pass it to Redux and assign it to a 
//prop that we can use.
import UserHeader from './UserHeader';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    return this.props.posts.map(post => {
      return(
        <div className='item' key={post.id}>
          <i className='large middle aligned icon user'/>
          <div className='content'>
            <div className='description'>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId}/>
          </div>
        </div>
      )
    })
  }

  render() {
    return <div className='ui relaxed divided list'>{this.renderList()}</div>;
  }
}


const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { 
  //we save that api call into a prop so we 
  //can call it in our componentDidMount
  fetchPosts: fetchPosts 
} )(PostList);