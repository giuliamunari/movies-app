//import { LOAD_MEDIA_SUCCESS } from '../actions/media'
import { ERROR } from '../actions/errorApi'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case ERROR:
            return { ...state, ...action.payload }
        default:
            return state
    }
}