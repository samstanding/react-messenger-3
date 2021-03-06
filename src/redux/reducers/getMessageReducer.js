import { combineReducers } from 'redux';
import { MESSAGE_ACTIONS } from '../actions/messageActions';

const messages = (state = null, action) => {
  switch (action.type) {
    case MESSAGE_ACTIONS.SET_MESSAGES:
    console.log(action.message[0]);
      return action.message|| state;
    default:
      return state;
  }
};

const isLoading = (state = false, action) => {
  switch (action.type) {
    case MESSAGE_ACTIONS.REQUEST_START:
      return true;
    case MESSAGE_ACTIONS.REQUEST_DONE:
      return false;
    default:
      return state;
  }
};

export default combineReducers({
  messages,
  isLoading,
});