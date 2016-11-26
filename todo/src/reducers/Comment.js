import * as ActionTypes from '../constants/ActionTypes';

const initialState = {comments: ['No Comments']};

export default function(state = initialState, action) {
  console.log('Reduce');
  switch (action.type) {
    case ActionTypes.RECIEVE_COMPONENTS:
      console.log('RECIEVE_COMPONENTS');
      console.dir(action);
      return {comments: action.comments};
    default:
      console.log('DEFAULT');
      return state;
  }
}
