import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';

class CommentBox extends Component {
  componentDidMount() {
    this.props.actions.searchComments();
  }

  render() {
    console.log('CommentBox Render');
    console.dir(this.props.data);
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.props.data} />
        <CommentForm />
      </div>
    );
  }
}

export default CommentBox;
