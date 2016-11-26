import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CommentActions from '../actions/CommentActions';
import CommentBox from './CommentBox';
import Organization from './organization';

import * as config from '../constants/github-url';


class Home extends Component {
  render() {
    console.log('PROPS');
    console.dir(this.props);
    const {dispatch, comments} = this.props;
    const actions = bindActionCreators(CommentActions, dispatch);
    const orgsDom = config.ORGANIZATIONS.map((org, i) => {
      return <Organization data={org} key={i} />;
    });

    return (
      <div>
        <h1>Pull Reqest List</h1>
        {orgsDom}
        <CommentBox actions={actions} data={comments} />
      </div>
    );
  }
}

export default connect(state => state.Comment)(Home);
