import * as types from '../actions/ActionTypes'

const initialState = {
    number: 0,
    dummy: 'dsfsdfa',
    dummyObject: {
        d: 1,
        u: 2
    }
}

export default function counter (state = initialState, action) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                number: state.number + 1,
                dummyObject: {
                    ...state.dummyObject, u: 0
                }
            }
        case types.DECREMENT:
            return {
                ...state, number: state.number - 1
            }
        default:
            return state
    }
}
