import {
    LOAD_MOVIES_SUCCESS,
    LOAD_DOCUMENTARIES_SUCCESS,
    LOAD_FAMILY_SUCCESS,
    LOAD_TV_SUCCESS,
    ERROR
} from '../actions/movieLists'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_MOVIES_SUCCESS:
            return { ...state, ...action.payload }
        case LOAD_TV_SUCCESS:
            return { ...state, ...action.payload }
        case LOAD_FAMILY_SUCCESS:
            return { ...state, ...action.payload }
        case LOAD_DOCUMENTARIES_SUCCESS:
            return { ...state, ...action.payload }
        case ERROR:
            return { ...state, ...action.payload }
        default:
            return state
    }
}