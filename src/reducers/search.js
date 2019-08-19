import { ERROR } from '../actions/errorApi'
import { SEARCH_MEDIA_SUCCESS } from '../actions/searchResults'
const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case SEARCH_MEDIA_SUCCESS:
            return { ...state, ...action.payload }
        case ERROR:
            return { ...state, ...action.payload }
        default:
            return state
    }
}