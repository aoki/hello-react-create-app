import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    const commentNodes = this.props.data.map((comment, index) => {
      return (
        <Comment key={index}>{comment}</Comment>
      );
    });

    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
}

export default CommentList;
