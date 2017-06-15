import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  comments: ['No Comments!'],
  prs: ['No PRs!']
};

export default function(state = initialState, action) {

  const newState = ( () => {
    switch (action.type) {
      case ActionTypes.RECIEVE_COMPONENTS:
        return {
          comments: action.foo,
          prs: action.comments
        };
      default:
        return state;
    }
  })();

  return newState;
}
