import * as ActionType from '../constants/ActionTypes';
import request from 'axios';
import * as GitHub from '../constants/github-url';

export function recieveComments(comments) {
  console.log('Recieve comments');
  return {
    type: ActionType.RECIEVE_COMPONENTS,
    comments
  };
}


export function searchComments() {
  return dispatch => {
    request.get(GitHub.GITHUB_REPOS_URL).then( res => {
      console.dir(res.data);
      console.dir(res.data.map(e => {return e.name;}));
      console.log('dispatch 前');
      console.dir(recieveComments(res.data.map(e => {return e.name;})));
      dispatch(recieveComments(res.data.map(e => {return e.name;})));
    }).catch( err => {
      console.error(err);
    });
  };
}
