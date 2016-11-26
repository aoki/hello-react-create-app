import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PullRequestActions from '../actions/pull-request-actions';

class Comment extends Component {
  componentDidMount() {
    console.log('Mounted: ' + this.props.children);
  }

  render() {
    return (
      <div className="comment">
        {this.props.children}
      </div>
    );
  }
}

export default Comment;
