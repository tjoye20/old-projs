import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
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
    //coming from props passed down to it
    this.props.onSubmit(formValues);
  }

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


export default reduxForm({
  //since the key/value are the same
  //you can just write #validate once
  validate: validate,
  form: 'StreamForm'
})(StreamForm);


