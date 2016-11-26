import React, {Component} from 'react';
import PullRequests from './pull-requests';

class Organization extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.data}</h2>
        <PullRequests />
      </div>
    );
  }
}

export default Organization;
