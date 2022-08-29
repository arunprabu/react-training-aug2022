import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPostRequest } from '../store/posts/actions';

export class PostForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log( this.postTitle.value);
    console.log( this.postBody.value);

    // making the submittable form data
    const postData = {
      title: this.postTitle.value,
      body: this.postBody.value
    }

    console.log(postData);
    this.props.dispatch(createPostRequest(postData))
  }

  render() {
    return (
      <div>
        <h3>Create Post!</h3>
  
        <form className='text-left' onSubmit={this.handleSubmit}>
          <input required type="text"
            placeholder="Enter Post Title"
            className='form-control' ref={(inputEl) => this.postTitle = inputEl }/><br />

          <textarea required rows="5" cols="28"
            placeholder="Enter Post"
            className='form-control' ref={(textAreaEl) => this.postBody = textAreaEl }/><br />
          <button className='btn btn-primary' 
          type='submit'>Add Post</button>
        </form>
      </div>
    )
  }
}


export default connect()(PostForm);
