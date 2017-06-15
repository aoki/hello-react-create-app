import * as ActionType from '../constants/ActionTypes';
import request from 'axios';
import * as GitHub from '../constants/github-url';

export function recieveComments(comments) {
  return {
    type: ActionType.RECIEVE_COMPONENTS,
    foo: comments
  };
}

export function searchComments() {
  return dispatch => {
    request.get(GitHub.GITHUB_REPOS_URL).then( res => {
      dispatch(recieveComments(res.data.map(e => {return e.name;})));
    }).catch( err => {
      console.error(err);
    });
  };
}
