import React, {Component} from 'react';
import PullRequests from './pull-requests';
import Repositories from '../containers/repositories';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as PullRequestActions from '../actions/pull-request-actions';

class Organization extends Component {
  componentDidMount() {
    console.log(`Orgs ${this.props.data}`);
  }

  render() {
    return (
      <div>
        <h2>{this.props.data}</h2>
        <Repositories actions={this.props.actions} data={this.props.data} />
        <PullRequests />
      </div>
    );
  }
}


// Container Component
// http://qiita.com/yuichiroTCY/items/a3ca7d9d415049d02d60#container-component

const mapStateToProps = (state, ownProps) => {
  return state.Organization;
}

// props.actionsにActionCreatoreで定義した関数を登録
// http://qiita.com/yasuhiro-okada-aktsk/items/09ab40af831c6d73491b#bindactioncreators
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_operator
const mapDispatchToProps = dispatch => {
  return {
    actions: {
      ...bindActionCreators(PullRequestActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
