import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends Component {
  render() {
    console.log('CommentList Render');
    console.dir(this.props.data);
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
