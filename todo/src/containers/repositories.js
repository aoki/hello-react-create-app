import React, {Component} from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as PullRequestActions from '../actions/pull-request-actions'

class Repositories extends Component {
  componentDidMount() {
    this.props.actions.gerRepositories(this.props.data);
  }

  render() {
    const repos = repos

    return (
      <div>
        <h3>Repositories</h3>
      </div>
    );
  }

}


const mapStateToProps = (state, ownProps) => {
  // console.info("REPO STATE");
  // console.dir(state.Repository);
  // return state.Repository;
};

const mapDispatchToProps = dispatch => {
  // console.dir(dispatch);
  // return {
  //   actions: {
  //     ...bindActionCreators(PullRequestActions, dispatch)
  //   }
  // };
};


export default connect(mapStateToProps, mapDispatchToProps)(Repositories);
