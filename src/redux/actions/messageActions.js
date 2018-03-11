export const MESSAGE_ACTIONS = {
    SEND: 'SEND',
    GATHER: 'GATHER',
    REQUEST_START: 'REQUEST_START',
    REQUEST_DONE: 'REQUEST_DONE',
    SET_MESSAGES: 'SET_MESSAGES',
    GET_FAILED: 'GET_FAILED',
    GET: 'GET'
}


export const triggerSend = (name, message) => ({
    type: MESSAGE_ACTIONS.SEND,
    payload: {
        name,
        message
    }
});

export function fetchMessages () {
    return {type: MESSAGE_ACTIONS.GET};
}