import React from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id)
  }

  onSubmit = (formValues) => {
    this.props.editStream(this.props.stream.id, formValues);
  };

  render() {
    let stream = this.props.stream;

    if (!stream) {
      return(
        <div>Loading</div>
      )
    } 

    return(
      <div>
        <h3>Stream Edit</h3>
        <StreamForm 
        //if we imported lodash we could use
        // {_.pick(stream, 'title', 'description')}
          initialValues={{ title: stream.title, description: stream.description }}
          onSubmit={this.onSubmit}
        />
      </div>
    )
  }
}

// //ownProps are the props passed to the StreamEdit 
// //component when we linked to it from StreamList.
const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(
  mapStateToProps, 
  { fetchStream, editStream }
)(StreamEdit);