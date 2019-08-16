import {LOAD_MOVIES_SUCCESS} from '../actions/movieLists'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_SUCCESS:
            return {...state, ...action.payload}
        default:
            return state
    }
}