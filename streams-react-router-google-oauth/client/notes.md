


<!-- /////////////////// -->



import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream } from '../../actions';


class StreamEdit extends React.Component {
  componentDidMount() {
    //when you call this, remember it sets a default state object where it puts the 
    //stream in, and then the combineReducer stores that stream object in a
    //key called STREAMS, that's how you're able to later call state.streams in your
    //mapStateToProps
    this.props.fetchStream(this.props.match.params.id)
  }

  render() {
    if (!this.props.stream) {
      return(
        <div>Loading</div>
      )
    } 

    let stream = this.props.stream; 

    return(
      <div>
        <h2>Stream</h2>
        <div className='ui celled list'>
          <i className='large middle aligned icon camera' />
          <div className='content'>
            Title: {stream.title}
            <div className='description'>
              {stream.description}
            </div>
          </div>
        </div>
        <div className='right floated content'>
          <Link to='/' className='ui button secondary'>
            Back
          </Link> 
        </div>
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

export default connect(mapStateToProps, { fetchStream })(StreamEdit);

// approach before making it a React component

// const StreamEdit = (props) => {
//   let stream = props.stream; 
//   return(
//     <div>
//       <h2>Streams</h2>
//       <div className='ui celled list'>
//         <i className='large middle aligned icon camera' />
//         <div className='content'>
//           Title: {stream.title}
//           <div className='description'>
//             {stream.description}
//           </div>
//         </div>
//       </div>
//       <div className='right floated content'>
//         <Link to='/' className='ui button secondary'>
//           Back
//         </Link> 
//       </div>
//     </div>
//   )
// }

// //ownProps are the props passed to the StreamEdit 
// //component when we linked to it from StreamList.
// const mapStateToProps = (state, ownProps) => {
//   console.log(ownProps)
//   return {
//     stream: state.streams[ownProps.match.params.id],
//     currentUserId: state.auth.userId,
//     isSignedIn: state.auth.isSignedIn
//   }
// }

// export default connect(mapStateToProps)(StreamEdit);



<!-- /////////////////// -->


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


<!-- /////////////////// -->


import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  //meta has an error propterty attached to it
  //we can return errors when the input is touched
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className='ui error message'>
          <div className='header'>{meta.error}</div>
        </div>
      );
    }
  }

  //formProps holds all the props/attributes on the Field component
  //that it doesn't know what to do with
  renderInput = (formProps) => {
    //example of how we can use formProps
    // return (
    //   <input 
    //     onChange={formProps.input.onChange} 
    //     value={formProps.input.value}
    //   />
    // );


    //we're just doing this to add our CSS classes
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`;


    // that ...formProps.input, takes everything in
    //input object, and sets all those values: onChange, value, etc.
    //it ads them as PROPS to the input element

    //we pass the #meta to our handler to access the errors properties
    return(
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input } autoComplete='off'/>
        <div>{this.renderError(formProps.meta)}</div>
      </div>
    )
  }


  //alternate syntax
  // renderInput({ input, label, meta }) {
  //   return <input {...input } />;
  // }


  //the #formValues are coming from 
  //our reduxForm #handleSubmit

  //this is the this.onSubmit
  onSubmit = (formValues) => {
    //coming from our Redux#connect
    this.props.createStream(formValues);
  }

 // the props (name, type, label) you pass to Field are passed
 //to the #component props object provided by the Field component.
 
 //MAKE SURE YOU PUT THE NAME ATTRIBUTE ON YOUR FIELD COMPONENT

 //this.props is our Field form object with everything as props.
 //it has its on #handleSubmit fxn we use to let the Redux-form know
 //a submission has happened.


 //we added className of Error to our form to make Semantic UI
 //display the errors


 //you use the Field component everytime you want to 
 //render some type of form element.
 //the attributes in Field (name, type, etc.) are now available
 //inside of formProps, look at #renderInput

  render() {
    return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className= 'ui error form'>
        <Field name='title' type='text' component={this.renderInput} label='title' />
        <Field name='description' type='text' component={this.renderInput} label='description'/>
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {}; 
  if (!formValues.title) {
    errors.title = 'You must enter a title'
  } 
  
  if (!formValues.description) {
    errors.description = 'You must enter a description'
  }
  //empty object tells Redux form that
  //there are no errors
  return errors
  
}


const formWrapped = reduxForm({
  //since the key/value are the same
  //you can just write #validate once
  validate: validate,
  form: 'streamCreate'
})(StreamCreate);


export default connect(null, { createStream })(formWrapped);
