/**
 * Reducer for all the actions used to load a specific media
 */
import { LOAD_MEDIA_SUCCESS } from '../actions/media'
import { ERROR } from '../actions/errorApi'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_MEDIA_SUCCESS:
            return {...action.payload}
        case ERROR:
            return { ...state, ...action.payload }
        default:
            return state
    }
}