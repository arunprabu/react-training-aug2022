import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRequest } from '../store/posts/actions';

export class PostList extends Component {

  componentDidMount() {
    console.log('=========== 2. Inside componentDidMount ===========');
    console.log(this.props); 
    // this.props.dispatch(fetchRequest);
    this.props.fetchRequest()
  }

  render() {
    console.log('Inside render');
    console.log(this.props);

    if (this.props.isLoading) {
      return (
        <div className="text-center spinner-border text-success" role="status">
        </div>
      )
    }

    let posts = null;
    if (this.props.postList && this.props.postList.length > 0) {
      posts = this.props.postList.map( (post, index) => {
        return(
          <div className="list-group-item list-group-item-action text-start" key={index + post.id}>
            <div className="d-flex w-100 justify-content-between">
              <h5 className="mb-1">
                <Link to={`/posts/${post.id}`}>{post.title}</Link>
              </h5>
              <small>Post Id: {post.id}</small>
            </div>
            <p className="mb-1 text-left">{post.body}</p>
          </div>
        )
      })
    }

    return (
      <div>
        <h3>Post List</h3>
        <div className="list-group text-left">
          
          { this.props.postList && this.props.postList.length > 0?
            posts
            :
            <div className='alert alert-warning'>
              No Posts Found. You can add one!
            </div>
          }
          
        </div>
      </div>
    )
  }
}


// writing a fn to subscribe to the store data.
// this must return the store data - that will become props 
const mapStateToProps = ( {posts} ) => {
  console.log(posts);
  console.log('===========1. inside mapStateToProps===========');
  return {
    postList: posts.postList,
    isLoading: posts.isLoading,
    errors: posts.errors,
    status: posts.status
  }
}

// you can access the keys of this obj in 'this.props.'
const mapDispatchToProps = {
  fetchRequest: fetchRequest
}

// connect() will get you dispatch fn as part of props 
// connect(mapStateToProps) will get you dispatch fn and store data and convert them to props 
export default connect(mapStateToProps, mapDispatchToProps)(PostList);


