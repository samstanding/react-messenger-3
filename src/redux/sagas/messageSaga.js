import { call, put, takeLatest } from 'redux-saga/effects';
import { MESSAGE_ACTIONS} from '../actions/messageActions';
import {callMessage} from '../requests/messageRequest';

function* gatherMessage (action) {
    try {
    yield put ({type: MESSAGE_ACTIONS.GATHER});
    yield call (callMessage, action.payload);
    } catch(error) {
        console.log('error on send message: ', error);
    }
}

function* messageSaga() {
    yield takeLatest(MESSAGE_ACTIONS.SEND, gatherMessage);
}

export default messageSaga;