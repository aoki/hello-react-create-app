import * as ActionType from '../constants/ActionTypes';
import * as GitHub from '../constants/github-url';
import request from 'axios';

export function recievePullRequest(prs) {
  return {
    type: ActionType.RECIEVE_PULL_REQUESTS,
    prs
  };
}

export function getPullRequests(repo) {
  return dispatch => {
    request.get(GitHub.prsUrl(repo)).then( res => {
      console.log('PRS');
      console.dir(res.data);
      console.dir(res.data.map(e => {return e.name;}));
      console.dir(recievePullRequest(res.data.map(e => {return e.name;})));
      dispatch(recievePullRequest(res.data.map(e => {return e.name;})));
    }).catch( err => {
      console.error(err);
    });
  };
}
