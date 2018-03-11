import { combineReducers } from 'redux';
import sendMessage from './messageReducer';
import messages from './getMessageReducer';

const store = combineReducers({
    sendMessage,
    messages,
});

export default store;
