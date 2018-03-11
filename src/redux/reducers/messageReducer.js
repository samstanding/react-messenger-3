import { MESSAGE_ACTIONS} from '../actions/messageActions';


const sendMessage = (state = '', action) => {
    switch (action.type) {
        case MESSAGE_ACTIONS.SEND:
        return action.payload;
        default:
        return state;
    }};

export default sendMessage;