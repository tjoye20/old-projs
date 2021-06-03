import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

// const StreamList = () => {
//   return <div>StreamList</div>;
// }

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return(
        <div className='right floated content'>
          <Link to={`/streams/edit/${stream.id}`} className='ui button primary'>
            Edit
          </Link> 
          <Link to='/streams/delete' className='ui button secondary'>
            Delete
          </Link> 
        </div>
      )
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return(
        <div className='right floated content'>
          <Link to='/streams/new' className='ui button primary'>
            New Stream
          </Link> 
        </div>
      )
    }
  }

  renderList() {
    return this.props.streams.map(stream => {
      //it creates this HTML for every stream
      return(
        <div className='item' key={stream.id}>
          {this.renderAdmin(stream)}
          <i className='large middle aligned icon camera' />
          <div className='content'>
            Title: {stream.title}
            <div className='description'>
              {stream.description}
            </div>
          </div>
        </div>
      )
    })
  }

  render() {
    return(
      <div>
        <h2>Streams</h2>
        <div className='ui celled list'>
          {this.renderList()}
          {this.renderCreate()}
        </div>
      </div>
    )
  }
}

//when you call mapStateToProps, one of the values it 
//receives from Redux is the Redux store/state contaning
//EVERYTHING in the Redux store
const mapStateToProps = (state) => {
  return {
    //Object.values turns all the values in an object into an array
    //so it'll be an array of stream objects

    //we store #streams as an array of results from our
    //STREAM_LIST action
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { fetchStreams })(StreamList);

