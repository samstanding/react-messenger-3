export const MESSAGE_ACTIONS = {
    SEND: 'SEND',
    GATHER: 'GATHER'
}


export const triggerSend = (name, message) => ({
    type: MESSAGE_ACTIONS.SEND,
    payload: {
        name,
        message
    }
});